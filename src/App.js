import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Link } from '@reach/router';
import HomeComponent from './components/HomeComponent';
import Thing from './components/Thing';
import HelloColor from './components/HelloColor';


function App() {
  return (
    <div className="App">
      <Router>
            <HomeComponent path="/"/>
            <Thing path="/:thing"/>
            <HelloColor path="/hello/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
