import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { C, DONATE_URL } from "./theme";
import Vision from "./components/Vision";
import Pillars from "./components/Pillars";
import Communities from "./components/Communities";
import Impact from "./components/Impact";
import Founder from "./components/Founder";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision /> 
        <Pillars />
        <Communities />
        <Impact />
         <Founder />
         <Locations />
         <Contact />
        {/* Next pages yahan add honge: About, Programs, Communities, Impact, Locations, Contact */}
      </main>

      {/* floating donate button (SSSI jaisa) */}
      <a
        href={DONATE_URL}
        className="float-donate"
        style={{ background: C.gold, color: "#111" }}
      >
        Donate Now
      </a>
      <Footer />
    </>
  );
}