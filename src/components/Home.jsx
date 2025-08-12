import React from 'react'

function Home() {
  return (
    <div 
      className="container-fluid p-0" 
      style={{
        border: "10px solid #28a745", // Green border
        borderRadius: "20px", // Rounded corners
        padding: "10px", // Space between content and border
        backgroundColor: "#fff", // Background inside border
      }}
    >
      <div className="row g-0">
        {/* Left Banner */}
        <div className="col-md-6 bg-success text-white d-flex flex-column justify-content-center p-5">
          <h1 className="fw-bold">Hire for</h1>
          <h1 className="fw-bold">what’s next.</h1>
        </div>

        {/* Right Image */}
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
