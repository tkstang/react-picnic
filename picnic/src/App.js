import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
