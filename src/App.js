import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DISHES } from './shared/dishes';
import './App.css';
import Main from './components/MainComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;