import React, {Component} from "react";
import RouterConfig from "./router/index";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                    {RouterConfig}
            </MuiThemeProvider>
        );
    }
}

export default App;
