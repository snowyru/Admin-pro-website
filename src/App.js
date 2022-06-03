import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import BGvid from "./BGvid.js";
import OurTeam from "./OurTeam.js";
import OurClients from "./OurClients.js";
import Contact from "./Contact.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={BGvid} exact={true} />
                <LayoutRoute path="/OurTeam" component={OurTeam} exact={true} />
                <LayoutRoute path="/OurClients" component={OurClients} exact={true} />
                <LayoutRoute path="/Contact" component={Contact} exact={true} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;