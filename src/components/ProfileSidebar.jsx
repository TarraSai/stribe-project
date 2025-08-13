import React from 'react';
import { FaUserTie, FaMapMarkerAlt, FaEuroSign, FaLanguage } from "react-icons/fa";
import { useTheme } from '../context/useTheme.js';

export default function ProfileSidebar() {
  const { theme } = useTheme();

  return (
    <div 
      style={{
        border: "1px solid white",
        borderRadius: "10px",        
        padding: "4px",              
        backgroundColor: theme === 'light' ? "#f8f9fa" : "#343a40"
      }}
    >
      <div className="p-4 bg-body shadow-sm rounded text-center">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.Ez46LhLCvyiFcF3BYWWrGQAAAA?w=437&h=532&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Profile"
          className="rounded-circle mb-3"
          style={{ width: '100px', height: '100px', objectFit: 'cover', border: '4px solid green' }}
        />

        <h5 className="fw-bold mb-1">Alex Johnson</h5>
        <span className="badge bg-body-tertiary text-success px-3 py-1 mb-2 fw-semibold">
          AVAILABLE IN 2 - 4 WEEKS
        </span>
        <p className="text-body-secondary mb-4">Senior UI/UX Designer @ Greenhouse</p>

        <ul className="list-unstyled text-start small mb-4">
          <li className="d-flex align-items-center mb-3">
            <FaUserTie className="text-body-secondary me-2" />
            <div>
              <div className="fw-semibold">Senior</div>
              <small className="text-body-secondary">Seniority</small>
            </div>
          </li>
          <li className="d-flex align-items-center mb-3">
            <FaMapMarkerAlt className="text-body-secondary me-2" />
            <div>
              <div className="fw-semibold">GMT+02:00, Barcelona, Spain</div>
              <small className="text-body-secondary">Location & Timezone</small>
            </div>
          </li>
          <li className="d-flex align-items-center mb-3">
            <FaEuroSign className="text-body-secondary me-2" />
            <div>
              <div className="fw-semibold">€60-80/hour</div>
              <small className="text-body-secondary">Average Hourly Rate</small>
            </div>
          </li>
          <li className="d-flex align-items-center mb-3">
            <FaLanguage className="text-body-secondary me-2" />
            <div>
              <div className="fw-semibold">Spanish, English</div>
              <small className="text-body-secondary">Languages</small>
            </div>
          </li>
        </ul>

        <button className={`btn w-100 rounded-pill mb-2 fw-semibold ${theme === 'dark' ? 'btn-success' : 'btn-success'}`}>
          Hire Alex
        </button>
        <button 
          className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-secondary'} w-100 rounded-pill fw-semibold mb-4`}
        >
          Add to Wishlist
        </button>

        <div className="text-start">
          <h6 className="fw-bold mb-3">Top Skills</h6>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-success text-white px-3 py-2">UI/UX Design</span>
            <span className="badge bg-success text-white px-3 py-2">React</span>
            <span className="badge bg-success text-white px-3 py-2">Prototyping</span>
            <span className="badge bg-success text-white px-3 py-2">Wireframing</span>
            <span className="badge bg-success text-white px-3 py-2">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
}