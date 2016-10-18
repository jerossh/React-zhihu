/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import ContentHeader from "./ContentHeader";
import GridView from "./GridView";

export default class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ContentHeader/>
                </div>

                <div className="row">
                    <GridView/>
                </div>
            </div>
        );
    }
}