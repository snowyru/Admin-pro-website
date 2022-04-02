import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import BGvid from "./BGvid.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" component={BGvid} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;