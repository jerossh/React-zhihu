/**
 * Created by kutear.guo on 2016/10/18.
 */

import React, {Component} from "react";
import "../res/css/introduction.css";
import sample from "../res/png/phone_sample.png";
import Tips from "./IntroductionTips";
import Download from "./IntroductionDownload";


export default class IntroductionContainer extends Component {

    render() {
        return (
            <div className="introduction_container row container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4 col-md-4">
                            <img src={sample} className="img-responsive"/>
                        </div>

                        <div className="col-xs-8 col-md-8">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-2">
                                    <Tips/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 col-md-offset-2">
                                    <Download/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
