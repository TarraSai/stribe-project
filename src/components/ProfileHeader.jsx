import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useTheme } from '../context/useTheme';
import './ProfileHeader.css';

export default function ProfileHeader() {
  const [isHeartActive, setHeartActive] = useState(false);
  const [isBellActive, setBellActive] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg bg-body shadow-sm">
      <div className="container-fluid">
        {/* Search Icon visible on small screens */}
        <span className="d-lg-none d-flex align-items-center me-3">
          <i className="bi bi-search text-body-emphasis" style={{ fontSize: "1.4rem" }}></i>
        </span>

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
          {/* Search Bar (visible on large screens) */}
          <form
            className="d-none d-lg-flex my-2 my-lg-0 me-auto"
            style={{ maxWidth: "400px", marginLeft: "20px", border: "2px solid #007bff", borderRadius: "50px" }}
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
              <span className="text-body-emphasis">My engagements</span>
            </li>
            <li className="nav-item me-lg-3">
              <i className="bi bi-question-circle text-body-emphasis" style={{ fontSize: "1.2rem" }}></i>
            </li>
            {/* Redesigned Theme Toggle Button */}
            <li className="nav-item me-lg-3">
                <button 
                    className={`btn rounded-pill px-3 py-2 fw-semibold d-flex align-items-center theme-toggle-btn text-${theme === 'light' ? 'white' : 'dark'} bg-${theme === 'light' ? 'dark' : 'white'}`}
                    onClick={toggleTheme}>
                    <i className={`bi ${theme === 'light' ? 'bi-moon' : 'bi-sun'}`} style={{ fontSize: "1rem" }}></i>
                    <span className="ms-2">{theme === 'light' ? 'Dark' : 'Light'}</span>
                </button>
            </li>
            
            {/* Heart Icon */}
            <li className="nav-item me-lg-3">
              <i
                className={`bi bi-heart${isHeartActive ? "-fill" : ""} heart-icon text-body-emphasis`}
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
                className={`bi bi-bell${isBellActive ? "-fill" : ""} bell-icon text-body-emphasis`}
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