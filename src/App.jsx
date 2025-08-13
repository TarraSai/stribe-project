import './App.css';
import AboutSection from "./components/AboutSection";
import Home from "./components/Home";
import ProfileHeader from "./components/ProfileHeader";
import ProfileSidebar from "./components/ProfileSidebar";
import TopSkills from './components/TopSkills';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;