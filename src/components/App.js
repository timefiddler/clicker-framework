import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import Button from './Button.js';
import '../styles/App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
      <Button
        onClick={()=>console.log('test Button')}
      />
      </div>



      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;