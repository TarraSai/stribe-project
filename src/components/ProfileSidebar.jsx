import React from 'react';
import { FaUserTie, FaMapMarkerAlt, FaEuroSign, FaLanguage } from "react-icons/fa";

export default function ProfileSidebar() {
  return (
    <div 
      style={{
        border: "8px solid white",
        borderRadius: "20px",        
        padding: "15px",              
        backgroundColor: "#f8f9fa"    
      }}
    >
      <div className="p-4 bg-white shadow-sm rounded text-center">
        {/* Profile Image */}
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.Ez46LhLCvyiFcF3BYWWrGQAAAA?w=437&h=532&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Profile"
          className="rounded-circle mb-3"
          style={{ width: '100px', height: '100px', objectFit: 'cover', border: '2px solid #007bff' }}
        />

        {/* Name & Role */}
        <h5 className="fw-bold mb-1">Alex Johnson</h5>
        <span className="badge bg-light text-primary px-3 py-1 mb-2 fw-semibold">
          AVAILABLE IN 2 - 4 WEEKS
        </span>
        <p className="text-muted mb-4">Senior UI/UX Designer @ Greenhouse</p>

        {/* Details List */}
        <ul className="list-unstyled text-start small mb-4">
          <li className="d-flex align-items-center mb-3">
            <FaUserTie className="text-secondary me-2" />
            <div>
              <div className="fw-semibold">Senior</div>
              <small className="text-muted">Seniority</small>
            </div>
          </li>
          <li className="d-flex align-items-center mb-3">
            <FaMapMarkerAlt className="text-secondary me-2" />
            <div>
              <div className="fw-semibold">GMT+02:00, Barcelona, Spain</div>
              <small className="text-muted">Location & Timezone</small>
            </div>
          </li>
          <li className="d-flex align-items-center mb-3">
            <FaEuroSign className="text-secondary me-2" />
            <div>
              <div className="fw-semibold">€60-80/hour</div>
              <small className="text-muted">Average Hourly Rate</small>
            </div>
          </li>
          <li className="d-flex align-items-center mb-3">
            <FaLanguage className="text-secondary me-2" />
            <div>
              <div className="fw-semibold">Spanish, English</div>
              <small className="text-muted">Languages</small>
            </div>
          </li>
        </ul>

        {/* Buttons */}
        <button className="btn btn-success w-100 rounded-pill mb-2 fw-semibold">
          Hire Alex
        </button>
        <button className="btn btn-outline-secondary w-100 rounded-pill fw-semibold mb-4">
          Add to Wishlist
        </button>

        {/* Top Skills Section */}
        <div className="text-start">
          <h6 className="fw-bold mb-3">Top Skills</h6>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-primary text-white px-3 py-2">UI/UX Design</span>
            <span className="badge bg-warning text-dark px-3 py-2">React</span>
            <span className="badge bg-success text-white px-3 py-2">Prototyping</span>
            <span className="badge bg-info text-dark px-3 py-2">Wireframing</span>
            <span className="badge bg-danger text-white px-3 py-2">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
}
