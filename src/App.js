import "../src/App.css"
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/TechStack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav";



function App() {
  const [theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <MobileNav/>
      <Layout/>
      <div className="container">
        <About/>
        <Education/>
        <Projects/>
        <Techstack/>
        <WorkExp/>
        <Contact/>
      </div>
      <div className="footer pb-5 ms-0">
        <Tada>
        <h4 className="text-center">
          &copy; 2024 All rights reserved.
        </h4>
        </Tada>
      </div>
      </div>
      <ScrollToTop smooth color="black" style={{backgroundColor:'#00abf0',borderRadius:'80px'}}/>
    </>
  );
}

export default App;
