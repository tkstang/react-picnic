import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import CheeseTable from './components/Cheeses/Cheeses';
import LoginForm from './components/Login/LoginForm';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Search} />
          <Route path="/results" component={CheeseTable} />
          <Route path="/login" component={LoginForm} />
          {/* <Route path="/signup" component={SignUp} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
