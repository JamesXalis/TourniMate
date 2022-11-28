import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './components/Home';
import Tournaments from './components/Tournaments';
import Courses from './components/Courses';
import Profile from './components/Profile';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

    
function App(){

ReactDOM.render(
  <Router>
      <Route exact path= '/'>
        <Home />
      </Route>
      <Route path='/Courses'>
        <Courses />
      </Route>
      <Route path='/Courses/Tournaments'>
        <Tournaments />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
    <App />
  </Router>,
);
}

export default App;