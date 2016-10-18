/**
 * Created by kutear.guo on 2016/10/18.
 */
import React, {Component} from "react";
import {Card, CardMedia, CardText} from "material-ui/Card";
// import sample from '../res/png/phone_sample.png'

export default class SingleItem extends Component {

    render() {
        var url = "/news?id=" + this.props.id

        return (
            <a href={url}>
                <Card>
                    <CardMedia >
                        <img src={this.props.img}/>
                    </CardMedia>
                    <CardText>
                        {this.props.title}
                    </CardText>
                </Card>
            </a>
        );
    }
}