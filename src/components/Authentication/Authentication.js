import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SampleChildComponent from '../../routes/SampleChildComponent'

export default function (ComposedComponent) {
    class Authentication extends Component {
        render() {
            return (
                <ComposedComponent>
                    
                </ComposedComponent>
            )
        }
    }
    return Authentication
}