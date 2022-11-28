import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navTabs.css";
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavTabs() {
    const [currentPage, setCurrentPage] = useState();
    let location = useLocation();
 
   useEffect (() => {
     setCurrentPage(location.pathname) 
   }, [location.pathname]);
  return (
    <div className="headerNav-container ">
      <Header />
      <ul className="nav nav-tabs ">
        <li className="nav-item">
          <Link
            to ={`/`}
            onClick={() => handlePageChange("Home")}
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
            onClick={() => handlePageChange("Courses")}
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
            to={`/Courses/Tournaments`}
            onClick={() => handlePageChange("Tournaments")}
            className={
              currentPage === "Tournaments"
                ? "nav-link active"
                : "nav-link NavColor"
            }
          >
            Tournaments
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={`/Profile`}
            onClick={() => handlePageChange("Profile")}
            className={
              currentPage === "Profile"
                ? "nav-link active"
                : "nav-link NavColor"
            }
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
