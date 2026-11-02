import { ConditionCards } from "./ConditionCards";
import { HealthPreventionCards } from "./HealthPreventionCards";
import { EyeAnatomy } from "./EyeAnatomy";
import Navbar from "../NavBar";
import { MedicalHero } from "./Hero";
import { VisionSimulator } from "./VisionSimulator";
import { MedicalVideoShowcase } from "./MedicalVideoShowcase";
import { Footer } from "../Footer";

export const MedicalLibraryPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <MedicalHero />

        {/* Interactive Eye Anatomy Section */}
        <EyeAnatomy />

        {/* Conditions Cards Section */}
        <ConditionCards />

        {/* Interactive Vision Loss Simulator */}
        <VisionSimulator />

        {/* Medical Video Showcase & 3D Animation Hub */}
        <MedicalVideoShowcase />

        {/* Prevention Section */}
        <HealthPreventionCards />
      </main>

      <Footer />
    </div>
  );
};
