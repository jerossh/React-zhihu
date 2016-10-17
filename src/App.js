import React, {Component} from 'react';

import RouterConfig from './router/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
