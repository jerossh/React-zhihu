/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";

const fontSize = {
    fontSize: 25,
    margin: 20,
}
export default class ContentHeader extends Component {
    render() {
        return (
            <div className="row">
                <span style={fontSize} className="col-sm-6 col-xs-12 col-md-4 col-lg-4">浏览内容</span>
                <span style={fontSize} className="col-sm-6 col-xs-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">最新内容</span>
            </div>
        );
    }
}