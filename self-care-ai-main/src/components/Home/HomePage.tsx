import Hero from "./Hero";
import { HowItWorks } from "./Working";
import { MedicalLibrary } from "./MedicalLibrary";
import { AboutAI } from "./AboutAI";
import { Testimonials } from "./Testimonials";
import Navbar from "../NavBar";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <MedicalLibrary />
      <AboutAI />
      <Testimonials />
    </>
  );
};
