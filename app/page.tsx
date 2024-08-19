'use client'
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ContentContainer from "./components/contentContainer/contentContainer";
import { useEffect, useState } from "react";
import Experience from "./components/Experience/Experience";

interface Location {
  latitude: number;
  longitude: number;
}
export default function Page() {
  const[loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Location | null>(null);
  useEffect(()=>{
    if(localStorage.getItem("theme")){
      document.documentElement.classList.add("dark")
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
    setTimeout(() => {setLoading(false)},1000)
    
  },[])
    return (
    loading ? 
    <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center overflow-hidden">
      <Image 
        src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt=""
        width={100}
        height={100}
        className="loading"
      />
    </div>
    :
    <div className="bg-black dark:bg-[#FAFAFA]">
      <Navbar/>
      <ContentContainer>
        
        <Home/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact location={location}/>
        <Footer/>
        
      </ContentContainer>
    </div>
  );
}
