/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import ZHIHU_URL from "../config";
import SingleItem from "./SingleItem";


const margin = {
    margin: 10
}

export default class GridView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        fetch(ZHIHU_URL)
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
            var result = this.state.data.stories.map(item=> {
                return (<div className="col-md-4 col-xs-12 col-sm-6"><SingleItem title={item["title"]}
                                                                                 img={item["images"][0]}
                                                                                 id={item["id"]}/></div>);
            });
            var result2 = this.state.data.top_stories.map(item=> {
                return (
                    <div className="col-md-4 col-xs-12 col-sm-6"><SingleItem title={item["title"]} img={item["image"]}
                                                                             id={item["id"]}/></div>);
            });
            result.concat(result2)

            var row = [];
            for (var i = 0, len = result.length; i < len; i += 3) {
                row.push(result.slice(i, i + 3));
            }
            console.log(row)
            result = [];
            for (var i = 0; i < row.length; i++) {
                result.push(<div className="row" style={margin}>{row[i]}</div>);
            }

            return (
                <div className="container">
                    {result}
                </div>
            );

        }


    }
}