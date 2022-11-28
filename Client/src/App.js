import React from 'react';
import Home from './components/Home';
import Tournaments from './components/Tournaments';
import Courses from './components/Courses';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




 
    
function App(){
 
return(
  <Router>
    <Routes>
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
    </Routes>
    <App />
  </Router>
);    
}


export default App;