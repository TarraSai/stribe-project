// src/components/AboutSection.jsx
import React, { useState } from "react";
import "./AboutSection.css"; 

export default function AboutSection() {
  const tabs = [
    "About",
    "Skills",
    "Experience",
    "Tools",
    "Career Highlights",
    "Testimonials",
    "Similar Talent",
  ];

  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="about-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

     <div className="tab-content">
  {activeTab === "About" && (
    <>
      <h2>About</h2>
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.Ez46LhLCvyiFcF3BYWWrGQAAAA?w=437&h=532&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Alex Johnson"
        className="about-image"
      />
      <p>
        I'm Alex Johnson, a Senior UI/UX Designer with a passion for
        crafting seamless digital experiences. With expertise in FinTech,
        SaaS, and Healthcare, I specialize in designing intuitive web and
        mobile applications that drive engagement and efficiency.
      </p>
      <p>
        My skill set includes UX strategy, design systems, and front-end
        technologies like React and Vue.js, ensuring both aesthetic and
        functional excellence. Based in Barcelona (GMT+2), I work closely
        with global teams to build scalable, user-friendly products.
      </p>
      <p>Let’s collaborate to bring your vision to life!</p>
    </>
  )}

  {activeTab === "Skills" && (
    <>
      <h2>Skills</h2>
      <ul>
        <li>Figma — 5 years</li>
        <li>User Testing — 5 years</li>
        <li>Web Design — 3 years</li>
        <li>Miro — 5 years</li>
        <li>SaaS — 4 years</li>
      </ul>
    </>
  )}

  {activeTab === "Experience" && (
    <>
      <h2>Experience</h2>
      <p>Senior UI/UX Designer @ Greenhouse — 2019–Present</p>
      <p>UX Designer @ DesignPro — 2016–2019</p>
    </>
  )}

  {activeTab === "Tools" && (
    <>
      <h2>Tools</h2>
      <ul>
        <li>Figma</li>
        <li>Miro</li>
        <li>Sketch</li>
        <li>Adobe XD</li>
      </ul>
    </>
  )}

  {activeTab === "Career Highlights" && (
    <>
      <h2>Career Highlights</h2>
      <p>Redesigned SaaS platform that increased retention by 25%.</p>
      <p>Led design team for a healthcare app used by 2M+ users.</p>
    </>
  )}

  {activeTab === "Testimonials" && (
    <>
      <h2>Testimonials</h2>
      <blockquote>
        "Alex's design expertise transformed our user experience."
      </blockquote>
    </>
  )}

  {activeTab === "Similar Talent" && (
    <>
      <h2>Similar Talent</h2>
      <p>Check out profiles of other talented UI/UX designers.</p>
    </>
  )}
</div>

    </div>
  );
}