import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import LoginForm from './components/Login/LoginForm';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <LoginForm />
      </div>
    );
  }
}

export default App;
