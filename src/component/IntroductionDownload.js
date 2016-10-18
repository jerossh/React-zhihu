/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import QR from "../res/png/qr_top2.png";
import ActionAndroid from "material-ui/svg-icons/action/android";
import RaisedButton from "material-ui/RaisedButton";


const style = {
    margin: 12,
};
export default class IntroductionDownload extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-6" style={style}>
                    <img src={QR} className="img-responsive"/>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-6">
                    <div className="row" style={style}>
                        <RaisedButton label="Android" labelPosition="after" icon={<ActionAndroid/>}/>
                    </div>
                    <div className="row" style={style}>
                        <RaisedButton label="IOS" labelPosition="after"/>
                    </div>
                </div>
            </div>
        );
    }
}