import { useState } from "react";
import { Info, ShieldCheck, Eye, Sparkles, ChevronRight, Layers, ExternalLink } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { Eye3DCanvas } from "../EyeAnatomy/Eye3DCanvas";
import { Eye2DDiagram } from "../EyeAnatomy/Eye2DDiagram";
import type { Anatomy2DPart } from "../EyeAnatomy/Eye2DDiagram";

export const EyeAnatomy = () => {
  const navigate = useNavigate();
  // Default to 2D image mode as requested by user
  const [viewMode, setViewMode] = useState<"2d" | "photorealistic" | "fluid-flow">("2d");
  const [selectedPartId, setSelectedPartId] = useState<string>("anterior-chamber");

  // Anatomical parts matching every label on the diagram
  const anatomyParts: Anatomy2DPart[] = [
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

  const activePart = anatomyParts.find((p) => p.id === selectedPartId) || anatomyParts[10];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden" id="eye-anatomy-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200">
            <Sparkles size={14} className="text-emerald-600" />
            <span>Interactive Ocular Anatomy Explorer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Anatomy of the Human Eye
          </h2>
          <p className="text-emerald-700 font-semibold text-base mb-3">
            Anterior & Posterior Chambers, Optical Optics, and Neural Pathways
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Click any glowing dot on the diagram labels to view comprehensive clinical details on the left, or toggle to the photorealistic 3D model.
          </p>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <div className="inline-flex p-1 bg-slate-200/80 rounded-2xl border border-slate-300 shadow-inner">
              <button
                onClick={() => setViewMode("2d")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === "2d"
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                <Layers size={15} />
                <span>2D Interactive Diagram</span>
              </button>
              <button
                onClick={() => setViewMode("photorealistic")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === "photorealistic"
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                <Eye size={15} className="text-emerald-400" />
                <span>Photorealistic 3D Model</span>
              </button>
              <button
                onClick={() => setViewMode("fluid-flow")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === "fluid-flow"
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                <Sparkles size={15} className="text-cyan-400" />
                <span>Fluid Dynamics 3D</span>
              </button>
            </div>

            <Link
              to="/eye-anatomy-3d"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-700/20 transition-all hover:scale-105"
            >
              <span>Open Dedicated 3D Lab</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* Interactive Studio Frame */}
        <div className={`bg-slate-900 border border-slate-800 shadow-2xl text-white transition-all rounded-[2.5rem] overflow-hidden ${
          viewMode === "2d" ? "p-6 lg:p-8" : "p-0"
        }`}>
          
          {viewMode === "2d" ? (
            /* 2D MODE: 2-Column Layout (Info on Left, Diagram on Right) */
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LEFT SIDE: Information Details Panel (5 Cols) */}
              <div className="lg:col-span-5 bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 uppercase tracking-wider font-mono">
                      {activePart.chamberLabel}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Anatomical Focus</span>
                  </div>

                  <h3 className="text-3xl font-serif font-bold text-white">
                    {activePart.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-teal-400">
                    {activePart.role}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {activePart.description}
                  </p>

                  {/* Physiology / Specs Box */}
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      <Info size={14} />
                      <span>Physiological Details</span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono leading-relaxed">
                      {activePart.keyStats}
                    </p>
                  </div>

                  {/* Clinical Pathology Card */}
                  <div className="bg-amber-950/40 border border-amber-800/60 p-4 rounded-2xl space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                      <ShieldCheck size={16} className="text-amber-400" />
                      <span>Associated Pathologies</span>
                    </div>
                    <p className="text-sm font-bold text-white">
                      {activePart.relatedDisease}
                    </p>
                    <p className="text-xs text-slate-400">
                      Structural damage or inflammation in this zone triggers progressive visual decline.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => navigate(activePart.diseaseLink)}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/50 transition-all hover:-translate-y-0.5"
                  >
                    <span>Learn Disease Treatment ({activePart.name})</span>
                    <ChevronRight size={14} />
                  </button>

                  <Link
                    to="/eye-anatomy-3d"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Eye size={14} className="text-emerald-400" />
                    <span>Explore Full 3D Anatomy Suite</span>
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE: Interactive 2D Diagram (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
                <Eye2DDiagram
                  parts={anatomyParts}
                  selectedPartId={selectedPartId}
                  onSelectPart={(id) => setSelectedPartId(id)}
                />

                {/* Anatomy Part Quick Selection Pills under Diagram */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                  {anatomyParts.map((part) => {
                    const isSelected = selectedPartId === part.id;
                    return (
                      <button
                        key={part.id}
                        onClick={() => setSelectedPartId(part.id)}
                        className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all ${
                          isSelected
                            ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 scale-105"
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                        }`}
                      >
                        {part.name}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          ) : (
            /* 3D MODE: FULL FRAME (No side details, 3D model takes entire width and full frame) */
            <div className="w-full flex flex-col">
              {/* Full Width 3D Model Canvas */}
              <div className="relative w-full min-h-[600px] md:min-h-[700px] bg-slate-950 flex flex-col">
                
                {/* 3D Model Top Info Bar */}
                <div className="bg-slate-950/95 border-b border-slate-800/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 z-10">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      {viewMode === "photorealistic" ? "Photorealistic 3D Model (PBR)" : "Fluid Dynamics 3D Simulation"}
                    </span>
                    <span className="text-xs text-slate-500 hidden sm:inline">|</span>
                    <span className="text-xs text-emerald-400/90 hidden sm:inline">
                      Full Frame View • No Side Panel
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <a
                      href="https://sketchfab.com/3d-models/eye-anatomy-5dac474887174eb78cb7ffce6bd9ce3a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 rounded-xl transition-all flex items-center gap-1.5 font-semibold border border-slate-700"
                    >
                      <span>Original Asset</span>
                      <ExternalLink size={12} />
                    </a>

                    <Link
                      to="/eye-anatomy-3d"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all flex items-center gap-1.5 font-bold shadow-md shadow-emerald-950"
                    >
                      <span>Launch Full 3D Lab</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Main 3D Viewport Filling 100% of the Frame */}
                {viewMode === "photorealistic" ? (
                  <div className="w-full flex-grow min-h-[540px] md:min-h-[640px] relative flex flex-col">
                    <iframe
                      title="Eye Anatomy - Photorealistic 3D Model Full"
                      className="w-full flex-grow border-0 min-h-[540px] md:min-h-[640px]"
                      src="https://sketchfab.com/models/5dac474887174eb78cb7ffce6bd9ce3a/embed?autostart=1&camera=0&preload=1&ui_theme=dark&ui_watermark=0&ui_infos=0&dnt=1"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="bg-slate-950/95 border-t border-slate-800 px-6 py-2.5 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
                      <span><strong>Interactive 3D Orbit:</strong> Click & drag to rotate • Scroll to zoom • Right-click to pan</span>
                      <button
                        onClick={() => setViewMode("2d")}
                        className="text-emerald-400 hover:text-emerald-300 font-mono text-[11px] underline underline-offset-2 flex items-center gap-1 transition-colors"
                      >
                        <Layers size={12} />
                        <span>Switch to 2D Diagram for clinical labels & info</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex-grow min-h-[540px] md:min-h-[640px] relative flex flex-col">
                    <Eye3DCanvas
                      selectedStructureId={selectedPartId}
                      onSelectStructure={(id) => setSelectedPartId(id)}
                      className="w-full h-full flex-grow min-h-[540px] md:min-h-[640px]"
                    />
                  </div>
                )}

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
