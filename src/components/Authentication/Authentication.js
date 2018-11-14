import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SampleChildComponent from '../../routes/SampleChildComponent'

export default function (ComposedComponent) {
    class Authentication extends Component {
        render() {
            console.log(this.props, 'props')
            return (
                <ComposedComponent>
                    <Route path='/samplechildcomponent' component={SampleChildComponent} />
                </ComposedComponent>
            )
        }
    }
    return Authentication
}