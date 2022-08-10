import '../carousel.css';
import {motion} from 'framer-motion'
import Ackerman from "../APAssets/Ackerman.jpg";
import Capsicum from "../APAssets/Capsicum.png";
import Muhammadeyah from "../APAssets/Muhammadeyah.jpg";
import HAS from "../APAssets/HAS.jpg";
import SASLAW from "../APAssets/SASLAW.jpg";
import Labour from "../APAssets/Labour.gif";
import BrainE from "../APAssets/BrainE.jpg";
import ActionCoach from "../APAssets/ActionCoach.jpg";

export default function CarouselComp () {

    const imgs = [Ackerman,Capsicum,Muhammadeyah,HAS,SASLAW,ActionCoach,Labour,BrainE];

return(
<section class="carousel">

  <motion.div class="carousel_container">
    <motion.div animate={{x:[0,-100,-200,-300,-400,-500,-600,-700,-800,-400,0]}} transition={{repeat:Infinity, duration:15, ease:[0.6,0.01,0.05,0.95], type:"tween" }} class="carousel__wrapper">
    {imgs.map((imgs) => (
        <div class="carousel__slide">
            <img class="carousel__image" alt={imgs} src={imgs}/>
        </div>
        ))}
    </motion.div>

  </motion.div>
</section>
)
}