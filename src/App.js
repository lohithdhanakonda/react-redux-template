import React, { Component } from 'react';
import Header from './components/Header';
import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
      </div>
    );
  }
}

export default App;
