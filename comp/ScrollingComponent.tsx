import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollingComponentProps {
  children: React.ReactNode;
}

const ScrollingComponent: React.FC<ScrollingComponentProps> = ({ children }) => {
  const [xPos, setXPos] = useState(0);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const container = event.currentTarget;
    const scrollAmount = event.deltaY * -1;
    setXPos((prev) => prev + scrollAmount);
    container.scrollLeft += scrollAmount;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="scrolling-container"
        onWheel={handleScroll}
        style={{ x: xPos }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollingComponent;
