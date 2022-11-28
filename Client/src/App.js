import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Home from './components/Home';
import Tournaments from './components/Tournaments';
import Courses from './components/Courses';
import Profile from './components/Profile'




function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Courses') {
      return <Courses />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    return <Tournaments />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App