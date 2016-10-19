/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import ZHIHU_URL from "../config";
import "../res/css/details.css";


export default class Details extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        var path = ZHIHU_URL + "?path=/api/4/news/" + this.props.location.query.id;
        console.log(path);
        fetch(path)
            .then(resopnse=>resopnse.json())
            .then(json=> {
                this.setState({
                    isLoading: false,
                    data: json
                });

            }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    toHtml() {
        var css = this.state.data.css.map(item=> {
            return ("<link rel=\"stylesheet\" href=\"" + item + "\"/>")
        })

        var html = ""
        for (var i = 0; i < css.length; i++) {
            console.log(css[i])
            html += css[i]
        }
        html += this.state.data.body

        html = html.replace("<div class=\"img-place-holder\"></div>", "")


        return {__html: html};
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    Loading
                </div>
            );
        } else {
            return (
                <div className="page">
                    <div className="container contenter">
                        <img src={this.state.data.image}/>

                        <div dangerouslySetInnerHTML={this.toHtml()}/>
                    </div>
                </div>
            );
        }
    }
}