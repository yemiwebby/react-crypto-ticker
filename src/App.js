import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tickers from './components/Tickers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         <h2> Cryptocurrency Ticker </h2>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;
