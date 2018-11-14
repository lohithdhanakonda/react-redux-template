import React, { Component } from 'react';
import './styles/app.scss';

export default function (ComposedComponent) {
    class App extends Component {
        render() {
            return <ComposedComponent />
        }
    }
    return App
}
