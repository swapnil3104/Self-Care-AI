import Navbar from "../NavBar";
import { AboutAI } from "./AboutAI";
import Hero from "./Hero";
import { MedicalLibrary } from "./MedicalLibrary";
import { Testimonials } from "./Testimonials";
import { HowItWorks } from "./Working";


function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MedicalLibrary />
      <AboutAI />
      <Testimonials />
      
      {/* Footer Placeholder for visual balance */}
      <div className="h-24 bg-white"></div>
    </div>
  );
}

export default App;