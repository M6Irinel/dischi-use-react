import React, { Component } from "react";
import Header from './components/header.js';
import Main from './components/main.js';
import './assets-global/css/style.css';

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
export default App;