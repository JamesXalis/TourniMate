import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="headerNav-container ">
      <Header />
      <ul className="nav nav-tabs ">
        <li className="nav-item">
          <a
            href="#"
            onClick={() => handlePageChange("Home")}
            className={
              currentPage === "Home" ? "nav-link active" : "nav-link NavColor"
            }
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Courses"
            onClick={() => handlePageChange("Courses")}
            className={
              currentPage === "Courses"
                ? "nav-link active"
                : "nav-link NavColor"
            }
          >
            Courses
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Tournaments"
            onClick={() => handlePageChange("Tournaments")}
            className={
              currentPage === "Tournaments"
                ? "nav-link active"
                : "nav-link NavColor"
            }
          >
            Tournaments
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Profile"
            onClick={() => handlePageChange("Profile")}
            className={
              currentPage === "Profile"
                ? "nav-link active"
                : "nav-link NavColor"
            }
          >
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
