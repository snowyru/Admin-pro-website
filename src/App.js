import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutRoute from "./LayoutRoute.js";
import BGvid from "./BGvid.js";
import OurTeam from "./OurTeam.js";
import theme from './themeProvider.js';
import {MuiThemeProvider} from "@material-ui/core/styles";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <MuiThemeProvider theme={theme}>
                <LayoutRoute path="/" component={BGvid} exact={true} />
                <LayoutRoute path="OurTeam" component={OurTeam} exact={true} />
                </MuiThemeProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default App;