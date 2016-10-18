/**
 * Created by kutear on 16-10-17.
 */
import React, {Component} from "react";
import IntroductionContainer from "./IntroductionContainer";
import Content from "./Content";


export default class Main extends Component {
    render() {
        return (
            <div>
                <IntroductionContainer/>
                <Content/>
            </div>
        );
    }
}