import React, { Component } from 'react';
import Projects from "./Components/Projects"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        MY APP
        <Projects test="Hello World!"/>
      </div>
    );
  }
}

export default App;
