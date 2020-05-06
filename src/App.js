import React, { Component } from 'react';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }

}

export default App;
