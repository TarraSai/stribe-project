import React from 'react';
import { useTheme } from '../context/useTheme.js';
import Typewriter from 'typewriter-effect';

function Home() {
  const { theme } = useTheme();

  return (
    <div
      className="container-fluid p-0 rounded-3"
      style={{
        borderWidth: "10px",
        borderColor: theme === 'light' ? "#28a745" : "#212529", 
        borderRadius: "20px",
        padding: "10px",
        backgroundColor: theme === 'light' ? "#fff" : "#212529", 
      }}
    >
      <div className="row g-0">
        <div 
          className={`col-md-6 d-flex flex-column justify-content-center p-5 ${theme === 'light' ? 'bg-success' : 'bg-dark'}`}
        >
          <h1 className={`fw-bold display-4 ${theme === 'light' ? 'text-white' : 'text-success'}`}>Hire for</h1>
          <h1 className={`fw-bold display-4 ${theme === 'light' ? 'text-white' : 'text-success'}`}>what’s next.</h1>
          
          <h4 className={`mt-3 text-white`}>
            <Typewriter
              options={{
                strings: ['Empower your team with top talent, we\'ll find the best fit.'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
          </h4>
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
  );
}

export default Home;