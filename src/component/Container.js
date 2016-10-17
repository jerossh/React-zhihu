/**
 * Created by kutear on 16-10-17.
 */
import React, {Component} from 'react'

export default class Container extends Component {
    render() {
        return (
            <div>
                <div>
                    Container
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}