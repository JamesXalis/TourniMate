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
  Switch,
  useLocation
} from "react-router-dom";



function usePageViews() {
  const [inIndex, setInIndex] = useState();
  let location = useLocation();

  React.useEffect(() => {
    setInIndex(location.pathname === '/')
  }, [location.pathname]);
  console.log(inIndex);

  return null
}

// function App(){
//   usePageViews();
//   return<Switch>...</Switch>;
// }

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path= '/'>
//         <Home />
//       </Route>
//       <Route path='/Courses'>
//         <Courses />
//       </Route>
//       <Route path='/Courses/Tournaments'>
//         <Tournaments />
//       </Route>
//       <Route path='/profile'>
//         <Profile />
//       </Route>
//     </Switch>
//     <App />
//   </Router>,
//   node
// );

export default usePageViews;