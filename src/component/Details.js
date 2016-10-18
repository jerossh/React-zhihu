/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import ZHIHU_URL from "../config";

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

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    Loading
                </div>
            );
        } else {
            return (
                <div>
                    {this.state.data.body.replace("\\", "")}
                </div>
            );
        }
    }
}