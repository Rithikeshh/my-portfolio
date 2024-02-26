import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ContentContainer from "./components/contentContainer/contentContainer";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <ContentContainer>
        
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        
      </ContentContainer>
    </div>
  );
}
