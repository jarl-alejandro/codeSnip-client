import React, { Component } from 'react';
import Form from './components/Code/Form'
import List from './components/Code/List'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <Form />
      </div>
    );
  }
}

export default App;
