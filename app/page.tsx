import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
