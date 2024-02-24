import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import CardsStack from "./components/CardsStack/CardsStack";

export default function Page() {
  return (
    <div>
      <CardsStack/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}
