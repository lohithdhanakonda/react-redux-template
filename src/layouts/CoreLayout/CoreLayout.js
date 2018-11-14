import React, { Component } from 'react';
import '../../styles/app.scss';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import SampleChildComponent from '../../routes/SampleChildComponent'
import {Route} from 'react-router-dom';
class CoreLayout extends Component {
    render() {
        console.log(this.props.children,'props')
        return (
            <div className="app">
                <Header></Header>
                <Route path='/samplechildcomponent' component={SampleChildComponent} />
                <Sidebar></Sidebar>
            </div>
        );
    }
}

export default CoreLayout;