import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] relative">
      <CustomCursor />
      <AnimatedBackground />
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
