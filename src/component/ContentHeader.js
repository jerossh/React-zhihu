/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import "../res/css/header.css";


export default class ContentHeader extends Component {
    render() {
        return (
            <div className="row contentHeader">
                <span className="readContent">浏览内容</span>
                <span className="newContent">最新内容</span>
            </div>
        );
    }
}