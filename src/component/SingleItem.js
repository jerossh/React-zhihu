/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import {Card, CardMedia, CardText} from "material-ui/Card";
import {Link} from "react-router";
import "../res/css/singleitem.css";

export default class SingleItem extends Component {

    render() {
        var url = "/React-zhihu/news?id=" + this.props.id

        return (
            <Link href={url}>
                <Card className="card">
                    <CardMedia >
                        <img src={this.props.img}/>
                    </CardMedia>
                    <CardText>
                        {this.props.title}
                    </CardText>
                </Card>
            </Link>
        );
    }
}