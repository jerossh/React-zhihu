/**
 * Created by kutear on 16-10-17.
 */
import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";


export default class Container extends Component {

    _clickTitle() {
        window.location = "/";
    }

    render() {
        return (
            <div>
                <header>
                    <AppBar
                        title="知乎日报"
                        onTitleTouchTap={this._clickTitle}
                        iconElementLeft={<div></div>}
                        iconElementRight={
                            <div>
                                <FlatButton
                                    href="https://github.com/kutear/"
                                    secondary={true}
                                    icon={<FontIcon className="muidocs-icon-custom-github"/>}
                                />
                            </div>
                        }
                    />
                </header>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}