
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/TechStack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <>
      <Layout/>
      <div className="container">
        <About/>
        <Education/>
        <Projects/>
        <Techstack/>
        <WorkExp/>
        <Contact/>
      </div>
      <div className="footer mb-5 ms-0">
        <h4 className="text-center">
          &copy; 2024 All rights reserved.
        </h4>
      </div>
      <ScrollToTop smooth color="#f29f67" style={{backgroundColor:'#1e1e2c',borderRadius:'80px'}}/>
    </>
  );
}

export default App;
