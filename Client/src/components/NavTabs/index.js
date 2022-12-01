import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navTabs.css";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth'
function NavTabs() {
  const [currentPage, setCurrentPage] = useState();
  let location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location.pathname]);
  return (
    <div className="headerNav-container">
      <ul className="nav ">
        <li className="nav-item">
          <Link
            to={`/`}
            onClick={() => setCurrentPage("Home")}
            className={
              currentPage === "/" ? "nav-link active" : "nav-link NavColor"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={`/Courses`}
            onClick={() => setCurrentPage("Courses")}
            className={
              currentPage === "Courses"
                ? "nav-link active"
                : "nav-link NavColor"
            }
          >
            Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={`/Profile`}
            onClick={() => setCurrentPage("Profile")}
            className={
              currentPage === "Profile"
                ? "nav-link active"
                : "nav-link NavColor"
            }
          >
            Profile
          </Link>
        </li>
        {AuthService.loggedIn() ? (
          <li className="nav-item">
            <Link
              to={`/`}
              onClick={AuthService.logout}
              className={
                currentPage === "Profile"
                  ? "nav-link active"
                  : "nav-link NavColor"
              }
            >Logout</Link></li> ) :
            ( <li></li>
          )}

          </ul>
    </div>
  );
}

export default NavTabs;
