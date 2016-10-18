/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import "../res/css/introductionTips.css";

export default class IntroductionTips extends Component {

    render() {
        return (
            <div >
                <h2 className="tips_title">每天三次，每次七分钟</h2>
                <p className="tips_desc">在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。</p>
            </div>
        );
    }
}