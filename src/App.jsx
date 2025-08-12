import './App.css'
import AboutSection from "./components/AboutSection"
import Home from "./components/Home"
import ProfileHeader from "./components/ProfileHeader"
import ProfileSidebar from "./components/ProfileSidebar"
import TopSkills from './components/TopSkills'

function App() {
  return (
    <>
      <ProfileHeader />
      <Home />
      <div className="main-container">
        <ProfileSidebar />
        <div className="content-container">
          <AboutSection />
          <TopSkills />
        </div>
      </div>
    </>
  )
}

export default App
