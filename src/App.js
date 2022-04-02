import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import MainScreen from './MainScreen.js';
import AboutScreen from "./AboutScreen.js";
import PricingScreen from "./PricingScreen.js";
import ProfileSettingsScreen from "./ProfileSettingsScreen.js";
import BGvid from "./BGvid.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" component={BGvid} exact={true} />
                <LayoutRoute path="/about" component={AboutScreen} exact={true} />
                <LayoutRoute path="/pricing" component={PricingScreen} exact={true} />
                <LayoutRoute path="/profile-settings" component={ProfileSettingsScreen} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;