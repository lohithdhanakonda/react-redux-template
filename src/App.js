import React, { Component } from 'react';
import './styles/app.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <Sidebar></Sidebar>
      </div>
    );
  }
}

export default App;
