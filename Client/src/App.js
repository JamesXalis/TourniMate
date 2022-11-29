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
      <Route path= '/' element={<Home />} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='/Courses/Tournaments' element={<Tournaments />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </Router>
);    
}


export default App;