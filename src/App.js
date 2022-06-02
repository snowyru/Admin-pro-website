import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import BGvid from "./BGvid.js";
import OurTeam from "./OurTeam.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" component={BGvid} exact={true} />
                <LayoutRoute path="OurTeam" component={OurTeam} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;