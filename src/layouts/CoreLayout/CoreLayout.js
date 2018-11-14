import React, { Component } from 'react';
import '../../styles/app.scss';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

class CoreLayout extends Component {
    render() {
        return (
            <div className="app">
                <Header></Header>
                {/* {this.props.children} */}
                <Sidebar></Sidebar>
            </div>
        );
    }
}

export default CoreLayout;