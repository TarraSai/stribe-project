import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ProfileHeader() {
    const [isHeartActive, setHeartActive] = useState(false);
  const [isBellActive, setBellActive] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
       

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Bar */}
          <form
            className="d-flex my-2 my-lg-0 me-auto"
            style={{ maxWidth: "400px", marginLeft: "20px" ,border: "2px solid #007bff", borderRadius: "50px" }}
          >
            <input
              className="form-control rounded-pill ps-3"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {/* Right Side Items */}
          <ul className="navbar-nav ms-auto align-items-lg-center mt-2 mt-lg-0">
            <li className="nav-item me-lg-3">
              <span>My engagements</span>
            </li>
            <li className="nav-item me-lg-3">
              <i className="bi bi-question-circle" style={{ fontSize: "1.2rem" }}></i>
            </li>
            {/* Heart Icon */}
            <li className="nav-item me-lg-3">
              <i
                className={`bi bi-heart${isHeartActive ? "-fill" : ""} heart-icon`}
                style={{
                  fontSize: "1.4rem",
                  color: isHeartActive ? "pink" : "inherit",
                  cursor: "pointer",
                }}
                onClick={() => setHeartActive(!isHeartActive)}
              ></i>
            </li>

            {/* Bell Icon */}
            <li className="nav-item me-lg-3">
              <i
                className={`bi bi-bell${isBellActive ? "-fill" : ""} bell-icon`}
                style={{
                  fontSize: "1.4rem",
                  color: isBellActive ? "black" : "inherit",
                  cursor: "pointer",
                }}
                onClick={() => setBellActive(!isBellActive)}
              ></i>
            </li>
            <li className="nav-item">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.Ez46LhLCvyiFcF3BYWWrGQAAAA?w=437&h=532&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Profile"
                className="rounded-circle"
                style={{ width: "32px", height: "32px", objectFit: "cover" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}