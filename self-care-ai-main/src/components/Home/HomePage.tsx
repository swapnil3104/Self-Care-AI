import Hero from "./Hero";
import { ImpactStats } from "./ImpactStats";
import { LiveScannerDemo } from "./LiveScannerDemo";
import { HowItWorks } from "./Working";
import { MedicalLibrary } from "./MedicalLibrary";
import { AboutAI } from "./AboutAI";
import { Testimonials } from "./Testimonials";
import Navbar from "../NavBar";
import { Footer } from "../Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <LiveScannerDemo />
        <HowItWorks />
        <MedicalLibrary />
        <AboutAI />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};
