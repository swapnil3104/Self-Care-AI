import React from "react";

export interface Anatomy2DPart {
  id: string;
  name: string;
  labelPosition: { top: string; left: string }; // Position of dot right next to the label
  chamber: "anterior" | "posterior" | "vitreous" | "wall";
  chamberLabel: string;
  role: string;
  description: string;
  relatedDisease: string;
  diseaseLink: string;
  keyStats: string;
}

export const defaultAnatomyParts: Anatomy2DPart[] = [
  {
    id: "conjunctiva",
    name: "Conjunctiva",
    labelPosition: { top: "22.4%", left: "7.6%" },
    chamber: "wall",
    chamberLabel: "Outer Ocular Surface",
    role: "Protective mucous membrane & tear film stabilization",
    description: "A thin, transparent vascular membrane that lines the inner eyelids and folds back to cover the anterior sclera up to the corneal limbus. Secretes mucus to lubricate the ocular surface.",
    relatedDisease: "Conjunctivitis ('Pink Eye') & Subconjunctival Hemorrhage",
    diseaseLink: "/medical-library/eye-health",
    keyStats: "Vascularized stratified epithelium • Goblet cells"
  },
  {
    id: "ciliary-body",
    name: "Ciliary Body",
    labelPosition: { top: "29.4%", left: "36.5%" },
    chamber: "posterior",
    chamberLabel: "Posterior Chamber (Secretory)",
    role: "Aqueous humor synthesis & lens accommodation",
    description: "A circumferential ring containing 70–80 ciliary processes that actively synthesize and pump 2–3 µL/min of aqueous humor into the posterior chamber. Contraction of ciliary muscle changes lens curvature.",
    relatedDisease: "Angle-Closure Glaucoma & Anterior Uveitis",
    diseaseLink: "/medical-library/glaucoma",
    keyStats: "2.0–2.5 µL/min active secretion • Double epithelium"
  },
  {
    id: "choroid",
    name: "Choroid",
    labelPosition: { top: "20.3%", left: "74.7%" },
    chamber: "wall",
    chamberLabel: "Vascular Uveal Coat",
    role: "High-volume blood supply & oxygenation to outer retina",
    description: "The heavily pigmented, highly vascular layer sandwiched between the sclera and retina. It has the highest blood flow per gram of any tissue in the body and dissipates thermal energy from light absorption.",
    relatedDisease: "Choroidal Neovascularization (Wet AMD) & Chorioretinitis",
    diseaseLink: "/medical-library/macular-degeneration",
    keyStats: "Highest blood flow/gram in the human body"
  },
  {
    id: "iris",
    name: "Iris",
    labelPosition: { top: "32.1%", left: "5.5%" },
    chamber: "anterior",
    chamberLabel: "Anterior/Posterior Partition",
    role: "Variable light aperture & ocular chamber division",
    description: "The pigmented muscular curtain of the eye. It divides the anterior and posterior chambers. Contains the sphincter pupillae (parasympathetic constriction) and dilator pupillae (sympathetic dilation).",
    relatedDisease: "Pupillary Block Glaucoma & Iritis",
    diseaseLink: "/medical-library/glaucoma",
    keyStats: "Aperture range: 2mm (bright) to 8mm (dark)"
  },
  {
    id: "retina",
    name: "Retina",
    labelPosition: { top: "31.5%", left: "81.9%" },
    chamber: "vitreous",
    chamberLabel: "Posterior Neurosensory Wall",
    role: "Phototransduction (Converts photons to electrical nerve signals)",
    description: "The 10-layer sensory neuroepithelium lining the posterior two-thirds of the globe. Contains 120 million rod photoreceptors (night/peripheral vision) and 6 million cone photoreceptors (high-acuity color vision).",
    relatedDisease: "Diabetic Retinopathy & Retinal Detachment",
    diseaseLink: "/medical-library/diabetic-retinopathy",
    keyStats: "126 million photoreceptor cells • 10 distinct layers"
  },
  {
    id: "lens",
    name: "Crystalline Lens",
    labelPosition: { top: "44.0%", left: "3.1%" },
    chamber: "posterior",
    chamberLabel: "Posterior Chamber Boundary",
    role: "Dynamic optical accommodation for near and far vision",
    description: "A flexible, completely avascular, transparent biconvex structure suspended behind the pupil by zonular fibers. Provides 15–20 diopters of dynamic refractive power.",
    relatedDisease: "Cataracts (Protein Aggregation & Clouding)",
    diseaseLink: "/medical-library/cataract",
    keyStats: "65% water, 35% crystallin proteins • Avascular"
  },
  {
    id: "macula",
    name: "Macula",
    labelPosition: { top: "43.1%", left: "84.5%" },
    chamber: "vitreous",
    chamberLabel: "Central High-Acuity Retina",
    role: "Ultra-sharp central color vision and detail recognition",
    description: "A small yellowish pigmented oval area at the center of the retina. At its center lies the fovea centralis, packed exclusively with cones for reading, driving, and face recognition.",
    relatedDisease: "Age-Related Macular Degeneration (AMD)",
    diseaseLink: "/medical-library/macular-degeneration",
    keyStats: "Fovea: ~1.5mm diameter • Highest cone density"
  },
  {
    id: "vitreous-body",
    name: "Vitreous Body",
    labelPosition: { top: "51.4%", left: "38.9%" },
    chamber: "vitreous",
    chamberLabel: "Posterior Cavity",
    role: "Structural globe stabilization and optical transmission",
    description: "The clear, gelatinous mass filling the space between the lens and the retina (80% of eyeball volume). Holds the retina firmly against the choroid and maintains spherical globe shape.",
    relatedDisease: "Posterior Vitreous Detachment (PVD) & Floaters",
    diseaseLink: "/medical-library/retinal-detachment",
    keyStats: "99% water + 1% collagen/hyaluronic acid • ~4.0 mL"
  },
  {
    id: "pupil",
    name: "Pupil",
    labelPosition: { top: "56.5%", left: "3.1%" },
    chamber: "anterior",
    chamberLabel: "Central Optical Aperture",
    role: "Controls retinal illumination depth of field",
    description: "The round opening in the center of the iris that appears black. It contracts in bright light to protect the retina and dilates in dim settings to maximize photon capture.",
    relatedDisease: "Relative Afferent Pupillary Defect (RAPD) & Pupil Block",
    diseaseLink: "/medical-library/glaucoma",
    keyStats: "Diameter: 2–4mm in light, 4–8mm in dark"
  },
  {
    id: "cornea",
    name: "Cornea",
    labelPosition: { top: "69.6%", left: "2.8%" },
    chamber: "anterior",
    chamberLabel: "Anterior Chamber Wall",
    role: "Primary optical window providing 70% of total refraction",
    description: "The clear, highly curved protective dome forming the front of the eye. Consists of 5 layers: Epithelium, Bowman's layer, Stroma, Descemet's membrane, and Endothelium.",
    relatedDisease: "Keratoconus (Cone-like Bulging) & Corneal Ectasia",
    diseaseLink: "/medical-library/keratoconus",
    keyStats: "Central thickness: 0.52mm • 43 Diopters power"
  },
  {
    id: "anterior-chamber",
    name: "Anterior Chamber",
    labelPosition: { top: "70.6%", left: "34.4%" },
    chamber: "anterior",
    chamberLabel: "Anterior Fluid Chamber",
    role: "Aqueous humor reservoir & iridocorneal drainage filtration",
    description: "The fluid-filled space bounded anteriorly by the cornea and posteriorly by the iris and pupil. Contains the trabecular meshwork at its angle, draining 85%+ of aqueous humor into Schlemm's canal.",
    relatedDisease: "Primary Open-Angle & Acute Angle-Closure Glaucoma",
    diseaseLink: "/medical-library/glaucoma",
    keyStats: "Volume: ~200 µL • Normal IOP: 10–21 mmHg"
  },
  {
    id: "conjunctiva-lower",
    name: "Conjunctiva (Inferior)",
    labelPosition: { top: "78.6%", left: "4.1%" },
    chamber: "wall",
    chamberLabel: "Inferior Ocular Surface",
    role: "Fornix protection & mucosal immunity",
    description: "The inferior bulbar and palpebral conjunctiva forming the lower fornix. Houses lymphoid tissue and immunological defenses protecting the lower eye from pathogens.",
    relatedDisease: "Allergic & Bacterial Conjunctivitis",
    diseaseLink: "/medical-library/eye-health",
    keyStats: "Rich mucosal-associated lymphoid tissue (MALT)"
  },
  {
    id: "optic-nerve",
    name: "Optic Nerve (Cranial Nerve II)",
    labelPosition: { top: "78.6%", left: "80.0%" },
    chamber: "wall",
    chamberLabel: "Posterior Neural Cable",
    role: "Transmits all visual electro-signals to the brain",
    description: "A thick bundle composed of 1.2 million retinal ganglion cell axons exiting the posterior pole of the globe. Enclosed in meninges, it carries vision directly to the lateral geniculate nucleus and visual cortex.",
    relatedDisease: "Glaucoma (Pressure-induced Axon Death) & Optic Neuritis",
    diseaseLink: "/medical-library/glaucoma",
    keyStats: "1.2 million myelinated axons • CN II"
  },
  {
    id: "sclera",
    name: "Sclera",
    labelPosition: { top: "85.8%", left: "13.1%" },
    chamber: "wall",
    chamberLabel: "Outer Fibrous Tunic",
    role: "Rigid protective shell & extraocular muscle anchor",
    description: "The tough, white, opaque fibrous outer coat of the eyeball covering the posterior five-sixths of the globe. Composed of dense, irregular type I collagen fibrils withstanding intraocular pressure.",
    relatedDisease: "Scleritis, Episcleritis & Scleral Staphyloma",
    diseaseLink: "/medical-library/eye-health",
    keyStats: "Thickness: 0.3mm (behind recti) to 1.0mm (posterior)"
  },
  {
    id: "optic-disc",
    name: "Optic Disc (Nerve Head)",
    labelPosition: { top: "88.4%", left: "63.3%" },
    chamber: "wall",
    chamberLabel: "Posterior Convergence Center",
    role: "Convergence site of all retinal ganglion cell axons",
    description: "The circular area where retinal axons coalesce to form the optic nerve. Because it contains no photoreceptor rods or cones, it creates the physiological blind spot in the visual field.",
    relatedDisease: "Glaucomatous Cupping & Papilledema",
    diseaseLink: "/medical-library/glaucoma",
    keyStats: "Normal Cup-to-Disc Ratio < 0.4 • Blind spot"
  }
];

interface Eye2DDiagramProps {
  parts?: Anatomy2DPart[];
  selectedPartId: string;
  onSelectPart: (id: string) => void;
  className?: string;
}

export const Eye2DDiagram: React.FC<Eye2DDiagramProps> = ({
  parts = defaultAnatomyParts,
  selectedPartId,
  onSelectPart,
  className = ""
}) => {
  return (
    <div className={`relative w-full aspect-[581/527] bg-[#0c2438] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl flex items-center justify-center select-none ${className}`}>
      
      {/* Background Medical Diagram Image */}
      <img
        src="/eye-anatomy-diagram.jpg"
        alt="Human Eye Anatomy Diagram"
        className="w-full h-full object-contain pointer-events-none"
      />

      {/* Interactive Little Dots positioned right in front of each Anatomical Name */}
      {parts.map((part) => {
        const isSelected = part.id === selectedPartId;
        return (
          <button
            key={part.id}
            onClick={() => onSelectPart(part.id)}
            style={{
              top: part.labelPosition.top,
              left: part.labelPosition.left,
              transform: "translate(-50%, -50%)"
            }}
            className="absolute z-20 group p-1.5 focus:outline-none flex items-center justify-center cursor-pointer"
            aria-label={`Select ${part.name}`}
            title={`Click to view ${part.name} details on the left`}
          >
            {/* Outer Subtle Pulse Ping */}
            <span
              className={`absolute rounded-full pointer-events-none transition-all duration-300 ${
                isSelected
                  ? "w-6 h-6 bg-emerald-400 opacity-75 animate-ping"
                  : "w-4 h-4 bg-cyan-400 opacity-0 group-hover:opacity-60 group-hover:animate-pulse"
              }`}
            />

            {/* Little Glowing Dot (9px) */}
            <span
              className={`relative rounded-full transition-all duration-300 shadow-md ${
                isSelected
                  ? "w-3 h-3 bg-emerald-400 ring-2 ring-emerald-300 ring-offset-1 ring-offset-slate-900 shadow-emerald-400 scale-125"
                  : "w-2.5 h-2.5 bg-cyan-300 group-hover:bg-emerald-300 ring-1 ring-white/80 shadow-cyan-400/80 group-hover:scale-125"
              }`}
            >
              <span className={`block rounded-full bg-white mx-auto my-auto ${isSelected ? "w-1 h-1" : "w-0.5 h-0.5"}`} />
            </span>

            {/* Hover Tooltip Label */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:flex items-center px-2 py-0.5 rounded-md bg-slate-950/95 border border-emerald-500/60 text-[10px] text-emerald-300 font-bold whitespace-nowrap shadow-2xl pointer-events-none z-30">
              {part.name}
            </span>
          </button>
        );
      })}

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-cyan-200/90 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/60 pointer-events-none shadow-lg">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Click any <strong>little dot on the names</strong> to view details on the left</span>
        </span>
        <span className="font-mono text-emerald-400 text-[10px] hidden sm:inline">15 Interactive Hotspots</span>
      </div>

    </div>
  );
};
