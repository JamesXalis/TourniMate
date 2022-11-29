import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';import Home from './components/Home';
import Tournaments from './components/Tournaments';
import Courses from './components/Courses';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavTabs from './components/NavTabs';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App(){
 
return(
  <ApolloProvider client={client}>
  <Router>
    <NavTabs/>
    <Routes>
      <Route path= '/' element={<Home />} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='/Courses/Tournaments' element={<Tournaments />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </Router>
  </ApolloProvider>
);    
}


export default App;