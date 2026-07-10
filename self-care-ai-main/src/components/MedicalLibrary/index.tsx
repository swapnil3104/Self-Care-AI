import { ConditionCards } from "./ConditionCards";
import { HealthPreventionCards } from "./HealthPreventionCards";
import { EyeAnatomy } from "./EyeAnatomy";
import Navbar from "../NavBar";
import { MedicalHero } from "./Hero";

export const MedicalLibraryPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <MedicalHero />

      {/* Eye Anatomy Section */}
      <EyeAnatomy />

      {/* Conditions Cards Section */}
      <ConditionCards />

      {/* Prevention Section */}
      <HealthPreventionCards />
    </div>
  );
};
