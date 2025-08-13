// src/components/Home.jsx
import React from 'react'

function Home() {
  return (
    <div
      className="container-fluid p-0 border border-success rounded-3"
      style={{
        borderWidth: "10px",
        borderColor: "#28a745",
        borderRadius: "20px",
        padding: "10px",
        backgroundColor: "#fff",
      }}
    >
      <div className="row g-0">
        <div className="col-md-6 bg-success text-white d-flex flex-column justify-content-center p-5">
          <h1 className="fw-bold">Hire for</h1>
          <h1 className="fw-bold">what’s next.</h1>
        </div>

        <div className="col-md-6">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.Jw1ij013jxt8j7XConLE_gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Banner"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home