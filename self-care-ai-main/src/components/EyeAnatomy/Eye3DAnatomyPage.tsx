import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Eye, 
  Maximize2, 
  RotateCcw, 
  Layers, 
  Activity, 
  ShieldAlert, 
  ShieldCheck,
  CheckCircle2, 
  BookOpen, 
  ChevronRight, 
  Compass, 
  Volume2, 
  Droplets, 
  ExternalLink,
  Sparkles,
  Info
} from "lucide-react";
import Navbar from "../NavBar";
import { Footer } from "../Footer";
import { Eye3DCanvas } from "./Eye3DCanvas";
import { Eye2DDiagram, defaultAnatomyParts } from "./Eye2DDiagram";
import type { Anatomy2DPart } from "./Eye2DDiagram";

interface StructureDetail {
  id: string;
  name: string;
  chamber: "anterior" | "posterior" | "vitreous" | "wall";
  chamberLabel: string;
  subtitle: string;
  keyStats: string;
  normalPressure?: string;
  role: string;
  fluidDynamicRole: string;
  anatomicalDescription: string;
  clinicalSignificance: string;
  diseaseLink: string;
  diseaseName: string;
}

export const Eye3DAnatomyPage = () => {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [modelType, setModelType] = useState<"photorealistic" | "fluid-flow" | "2d">("photorealistic");
  const [activeTab, setActiveTab] = useState<"all" | "anterior" | "posterior" | "vitreous">("all");
  const [selectedStructureId, setSelectedStructureId] = useState<string>("anterior-chamber");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [flowStep, setFlowStep] = useState<number>(1);

  // High-yield anatomical structures focusing on Anterior and Posterior Chambers
  const structures: StructureDetail[] = [
    {
      id: "anterior-chamber",
      name: "Anterior Chamber (Camera Anterior Bulbi)",
      chamber: "anterior",
      chamberLabel: "Anterior Chamber",
      subtitle: "Fluid-filled space between Cornea and Iris",
      keyStats: "Volume: ~200 µL • Depth: 3.0–3.2 mm",
      normalPressure: "10 – 21 mmHg (IOP)",
      role: "Contains aqueous humor, optical clarity, nutrient exchange for avascular cornea & lens",
      fluidDynamicRole: "Aqueous humor leaves posterior chamber via pupil into anterior chamber, thermal convection currents circulate it down to the drainage angle.",
      anatomicalDescription: "Bound anteriorly by the posterior corneal surface (endothelium) and posteriorly by the anterior iris surface and pupillary region of the lens. The peripheral circumference is the iridocorneal filtration angle containing the trabecular meshwork.",
      clinicalSignificance: "Glaucoma occurs when the filtration angle or trabecular meshwork is blocked, spiking intraocular pressure (IOP). Shallow anterior chambers predispose to acute angle-closure emergencies.",
      diseaseLink: "/medical-library/glaucoma",
      diseaseName: "Angle-Closure & Open-Angle Glaucoma"
    },
    {
      id: "posterior-chamber",
      name: "Posterior Chamber (Camera Posterior Bulbi)",
      chamber: "posterior",
      chamberLabel: "Posterior Chamber",
      subtitle: "Ring-like space behind the Iris and in front of the Lens",
      keyStats: "Volume: ~60 µL • Narrow annular crevice",
      role: "Site of Aqueous Humor synthesis and secretion by ciliary processes",
      fluidDynamicRole: "Non-pigmented ciliary epithelium actively pumps Na+, Cl-, and bicarbonate into the posterior chamber to continuously synthesize fresh aqueous humor (2–3 µL/min).",
      anatomicalDescription: "A narrow ring-shaped cleft bounded anteriorly by the posterior face of the iris, posteriorly by the anterior face of the vitreous body and lens zonules, and peripherally by the ciliary processes.",
      clinicalSignificance: "Pupillary block occurs when the iris sticks to the lens (posterior synechiae), blocking aqueous flow from posterior to anterior chamber and causing iris bombé.",
      diseaseLink: "/medical-library/glaucoma",
      diseaseName: "Pupillary Block & Secondary Glaucoma"
    },
    {
      id: "cornea",
      name: "Cornea & Corneal Endothelium",
      chamber: "anterior",
      chamberLabel: "Anterior Chamber Wall",
      subtitle: "Transparent anterior dome providing 70% of optical refraction",
      keyStats: "Central thickness: 0.52 mm • Radius: 7.8 mm",
      role: "Optical transmission & mechanical barrier",
      fluidDynamicRole: "The single endothelial cell layer maintains corneal deturgescence (clarity) by constantly pumping water out into the anterior chamber.",
      anatomicalDescription: "Consists of 5 primary layers: Epithelium, Bowman's layer, Stroma (90% collagen fibrils), Descemet's membrane, and the metabolic Endothelium. Completely avascular, receiving oxygen from air and nutrients from anterior chamber aqueous humor.",
      clinicalSignificance: "Keratoconus causes thinning and progressive conical deformation. High IOP can cause endothelial decompensation and corneal edema (hazy vision).",
      diseaseLink: "/medical-library/keratoconus",
      diseaseName: "Keratoconus & Corneal Ectasia"
    },
    {
      id: "trabecular-meshwork",
      name: "Trabecular Meshwork & Schlemm's Canal",
      chamber: "anterior",
      chamberLabel: "Anterior Chamber Angle",
      subtitle: "The primary drainage filtration sieve of the human eye",
      keyStats: "Drains 80–90% of total aqueous outflow",
      normalPressure: "Resistance creates physiological IOP",
      role: "Filters and regulates outflow of aqueous humor into systemic circulation",
      fluidDynamicRole: "Aqueous humor filters through uveal meshwork, corneoscleral meshwork, and juxtacanalicular tissue into Schlemm's canal, then through 25-30 collector channels to episcleral veins.",
      anatomicalDescription: "Located at the iridocorneal junction inside the scleral sulcus. Composed of collagenous and elastic trabeculae covered by endothelial cells with microscopic intertrabecular spaces.",
      clinicalSignificance: "Extracellular matrix buildup and trabeculocyte stiffening cause primary open-angle glaucoma (POAG). First-line glaucoma drops (prostaglandins, rho-kinase inhibitors) target this pathway.",
      diseaseLink: "/medical-library/glaucoma",
      diseaseName: "Primary Open-Angle Glaucoma"
    },
    {
      id: "ciliary-body",
      name: "Ciliary Body & Ciliary Processes",
      chamber: "posterior",
      chamberLabel: "Posterior Chamber",
      subtitle: "Muscular ring & active aqueous secretory engine",
      keyStats: "~70–80 ciliary processes (corona ciliaris)",
      role: "Dual function: Aqueous production & Crystalline lens accommodation",
      fluidDynamicRole: "Secretes 2.0 to 2.5 microliters of clear aqueous humor per minute via carbonic anhydrase and active ATP-dependent transport.",
      anatomicalDescription: "Extends from the ora serrata anteriorly to the root of the iris. Composed of the pars plicata (containing folded ciliary processes) and the posterior pars plana. Contraction of ciliary muscle relaxes zonules, allowing the lens to round up for near focus.",
      clinicalSignificance: "Beta-blocker and carbonic anhydrase inhibitor eye drops suppress aqueous secretion at this site to alleviate glaucoma pressure. Inflammation causes anterior uveitis.",
      diseaseLink: "/medical-library/glaucoma",
      diseaseName: "Uveitic Glaucoma & Presbyopia"
    },
    {
      id: "crystalline-lens",
      name: "Crystalline Lens & Zonules",
      chamber: "posterior",
      chamberLabel: "Posterior Chamber / Boundary",
      subtitle: "Flexible biconvex optic suspended by Zonules of Zinn",
      keyStats: "35% protein (crystallins), 65% water",
      role: "Dynamic optical accommodation for near and far vision",
      fluidDynamicRole: "Submerged in aqueous humor anteriorly and vitreal gel posteriorly; derives 100% of its glucose and nutrition from aqueous fluid.",
      anatomicalDescription: "An avascular, transparent biconvex disc consisting of an outer capsule, subcapsular epithelium, and densely packed lens fibers. Suspended by thousands of delicate zonular fibers anchored to the ciliary body.",
      clinicalSignificance: "With aging, UV damage, or oxidative stress, crystallin proteins denature and clump together, creating optical opacities known as cataracts.",
      diseaseLink: "/medical-library/cataract",
      diseaseName: "Cataracts & Aphakic Glaucoma"
    },
    {
      id: "iris-pupil",
      name: "Iris & Pupillary Aperture",
      chamber: "anterior",
      chamberLabel: "Chamber Partition",
      subtitle: "Contractile pigmented diaphragm separating anterior & posterior chambers",
      keyStats: "Pupil diameter: 2 mm (bright) to 8 mm (dark)",
      role: "Controls retinal illumination depth of focus and divides the two chambers",
      fluidDynamicRole: "Aqueous humor synthesized in posterior chamber MUST squeeze through the pupillary aperture between iris and lens to enter anterior chamber.",
      anatomicalDescription: "Features two involuntary muscles: the circular sphincter pupillae (parasympathetic constriction) and the radial dilator pupillae (sympathetic dilation). Posterior surface is heavily pigmented with melanin.",
      clinicalSignificance: "Mid-dilated pupil can cause pupil block in anatomically predisposed eyes, leading to acute angle-closure glaucoma crisis. Requires emergency laser peripheral iridotomy (LPI).",
      diseaseLink: "/medical-library/glaucoma",
      diseaseName: "Acute Angle Closure Emergency"
    },
    {
      id: "vitreous-body",
      name: "Vitreous Chamber & Hyaloid Gel",
      chamber: "vitreous",
      chamberLabel: "Posterior Segment Cavity",
      subtitle: "Large posterior compartment maintaining globe geometry",
      keyStats: "Volume: ~4.0 mL (80% of eye volume)",
      normalPressure: "Hydrostatic transmission to retina",
      role: "Maintains spherical eyeball shape and holds retina against choroid",
      fluidDynamicRole: "Viscoelastic shock absorber; does not circulate rapidly like aqueous humor, but slowly exchanges solutes.",
      anatomicalDescription: "Occupies the space between the lens and the retina. Composed of 99% water cross-linked with type II collagen fibrils and hyaluronic acid macromolecules.",
      clinicalSignificance: "Vitreous syneresis (liquefaction) with age triggers posterior vitreous detachment (PVD), flashers, floaters, and potential retinal tear or detachment.",
      diseaseLink: "/medical-library/retinal-detachment",
      diseaseName: "Posterior Vitreous Detachment & Tears"
    },
    {
      id: "retina-macula",
      name: "Retina & Macula Lutea",
      chamber: "wall",
      chamberLabel: "Posterior Neurosensory Wall",
      subtitle: "10-layer neurological photon detector",
      keyStats: "126 million photoreceptors (rods & cones)",
      role: "Phototransduction — transforms photons into electrochemical impulses",
      fluidDynamicRole: "Requires steady retinal blood supply; vulnerable to elevated IOP or diabetic microvascular ischemia.",
      anatomicalDescription: "Extends from the ora serrata to the optic nerve. Centered at the macula lutea with the fovea centralis at its core, packed exclusively with high-resolution cone cells.",
      clinicalSignificance: "Diabetic retinopathy weakens retinal capillaries, leading to microaneurysms, macular edema, and neovascularization.",
      diseaseLink: "/medical-library/diabetic-retinopathy",
      diseaseName: "Diabetic Retinopathy & Maculopathy"
    },
    {
      id: "optic-nerve",
      name: "Optic Nerve & Lamina Cribrosa",
      chamber: "wall",
      chamberLabel: "Posterior Outflow Tract",
      subtitle: "Cranial Nerve II — Visual Cable to the Visual Cortex",
      keyStats: "1.2 million retinal ganglion cell axons",
      role: "Transmits all visual signals to the lateral geniculate nucleus and brain",
      fluidDynamicRole: "Axonal transport can be choked at the lamina cribrosa if intraocular pressure exceeds capillary perfusion pressure.",
      anatomicalDescription: "Exits through the sieve-like scleral perforation (lamina cribrosa). Evaluated clinically by the cup-to-disc ratio (normal < 0.4).",
      clinicalSignificance: "Glaucomatous optic neuropathy causes progressive cup enlargement, neuroretinal rim thinning, and irreversible peripheral-to-central visual field loss.",
      diseaseLink: "/medical-library/glaucoma",
      diseaseName: "Glaucomatous Optic Neuropathy"
    }
  ];

  const filteredStructures = activeTab === "all" 
    ? structures 
    : structures.filter(s => s.chamber === activeTab);

  const selectedStructure = structures.find(s => s.id === selectedStructureId) || structures[0];
  const active2DPart = defaultAnatomyParts.find(p => p.id === selectedStructureId) || defaultAnatomyParts[10];

  const handleFullscreenToggle = () => {
    if (!iframeRef.current) return;
    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen?.().catch((err) => {
        console.error("Fullscreen error:", err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const handleResetView = () => {
    if (iframeRef.current) {
      // Reload iframe to reset camera and state
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = "";
      setTimeout(() => {
        if (iframeRef.current) iframeRef.current.src = currentSrc;
      }, 50);
    }
  };

  // Aqueous Humor Flow Steps
  const flowSteps = [
    {
      step: 1,
      title: "1. Production in Posterior Chamber",
      subtitle: "Active secretion by Ciliary Processes",
      desc: "Double-layered ciliary epithelium pumps ions and water to produce 2–3 µL/min of ultra-clear aqueous humor into the posterior chamber.",
      location: "Posterior Chamber (Pars Plicata)"
    },
    {
      step: 2,
      title: "2. Trans-Pupillary Passage",
      subtitle: "Transit from Posterior to Anterior Chamber",
      desc: "Fluid flows forward through the narrow cleft between the iris underside and anterior lens capsule, passing through the pupil into the anterior chamber.",
      location: "Pupillary Aperture"
    },
    {
      step: 3,
      title: "3. Anterior Convection Circulation",
      subtitle: "Thermal convective currents",
      desc: "Because the cornea is cooler (exposed to air) and the iris is warmer (vascular), aqueous flows downward along the cornea and upward along the iris.",
      location: "Anterior Chamber Cavity"
    },
    {
      step: 4,
      title: "4. Iridocorneal Angle Filtration",
      subtitle: "Trabecular Meshwork Sieve",
      desc: "Aqueous enters the iridocorneal filtration angle, permeating through the uveal, corneoscleral, and cribriform trabecular meshwork (80–90% conventional outflow).",
      location: "Trabecular Meshwork (Angle)"
    },
    {
      step: 5,
      title: "5. Schlemm's Canal & Venous Return",
      subtitle: "Systemic circulation re-entry",
      desc: "Fluid drains into Schlemm's canal, passes through 25–30 collector channels, and enters the episcleral venous plexus at ~8–10 mmHg pressure.",
      location: "Canal of Schlemm / Episcleral Veins"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        {/* Breadcrumb & Header Bar */}
        <section className="max-w-7xl mx-auto px-6 pt-6 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <ChevronRight size={14} className="text-slate-600" />
              <Link to="/medical-library" className="hover:text-emerald-400 transition-colors">Medical Library</Link>
              <ChevronRight size={14} className="text-slate-600" />
              <span className="text-emerald-400 font-semibold">3D Eye Anatomy Explorer</span>
            </nav>

            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs text-emerald-300 font-medium">
              <Sparkles size={14} className="text-emerald-400 animate-pulse" />
              <span>Reference Standard: MSD Manuals Professional 3D Anatomy</span>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-teal-400 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-slate-700">
              <Eye size={14} />
              <span>Interactive Ophthalmic Digital Twin</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tight leading-tight">
              3D Anatomy of the Eye
            </h1>
            <p className="text-emerald-400 font-mono text-lg mt-2 font-semibold">
              Anterior and Posterior Chambers & Ocular Fluid Dynamics
            </p>
            <p className="text-slate-400 text-base md:text-lg mt-3 leading-relaxed">
              Experience a clinical-grade, fully interactive 3D model of the human eye. 
              Rotate 360°, dissect internal ocular layers, inspect the aqueous humor circulation cycle, 
              and understand how anatomical chamber blocks lead to glaucoma and vision loss.
            </p>
          </div>
        </section>

        {/* 3D Model Viewport + Live Controller Panel */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/20">
            
            {/* Viewport Header Bar with Engine Switcher */}
            <div className="bg-slate-950/80 border-b border-slate-800/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-xl border border-slate-700/80">
                  <button
                    onClick={() => setModelType("photorealistic")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      modelType === "photorealistic"
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Eye size={13} className="text-emerald-300" />
                    <span>Realistic 3D (PBR)</span>
                  </button>
                  <button
                    onClick={() => setModelType("fluid-flow")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      modelType === "fluid-flow"
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Droplets size={13} className="text-cyan-300" />
                    <span>Fluid Dynamics 3D</span>
                  </button>
                  <button
                    onClick={() => setModelType("2d")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      modelType === "2d"
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Layers size={13} />
                    <span>2D Medical Diagram</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {modelType !== "2d" && (
                  <button
                    onClick={() => setShowSidePanel(!showSidePanel)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      !showSidePanel
                        ? "bg-emerald-600 text-white border-emerald-500 shadow-sm shadow-emerald-900"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
                    }`}
                    title={showSidePanel ? "Expand to Full Frame View (Hide Side Panel)" : "Show Side Detail Panel"}
                  >
                    <Maximize2 size={12} />
                    <span>{!showSidePanel ? "Full Frame (Active)" : "Full Frame 3D"}</span>
                  </button>
                )}

                <a
                  href="https://sketchfab.com/3d-models/eye-anatomy-5dac474887174eb78cb7ffce6bd9ce3a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 rounded-lg text-xs font-semibold transition-all border border-slate-700"
                  title="View original on Sketchfab"
                >
                  <span>Sketchfab 3D Model</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href="https://www.msdmanuals.com/professional/multimedia/3dmodel/eye-anterior-and-posterior-chambers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 rounded-lg text-xs font-semibold transition-all border border-slate-700"
                  title="View original on MSD Manuals Professional"
                >
                  <span>MSD Manual</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Main Interactive Workspace */}
            {modelType === "2d" ? (
              /* 2D MODE: Exact 2-Column Medical Library Layout (Info on Left, Diagram with Dots on Right) */
              <div className="p-6 lg:p-8 bg-slate-900">
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* LEFT SIDE: Information Details Panel (5 Cols) */}
                  <div className="lg:col-span-5 bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 order-2 lg:order-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60 uppercase tracking-wider font-mono">
                          {active2DPart.chamberLabel}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">Anatomical Focus</span>
                      </div>

                      <h3 className="text-3xl font-serif font-bold text-white">
                        {active2DPart.name}
                      </h3>
                      
                      <p className="text-xs font-semibold text-teal-400">
                        {active2DPart.role}
                      </p>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {active2DPart.description}
                      </p>

                      {/* Physiology / Specs Box */}
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                          <Info size={14} />
                          <span>Physiological Details</span>
                        </div>
                        <p className="text-xs text-slate-300 font-mono leading-relaxed">
                          {active2DPart.keyStats}
                        </p>
                      </div>

                      {/* Clinical Pathology Card */}
                      <div className="bg-amber-950/40 border border-amber-800/60 p-4 rounded-2xl space-y-1.5">
                        <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                          <ShieldCheck size={16} className="text-amber-400" />
                          <span>Associated Pathologies</span>
                        </div>
                        <p className="text-sm font-bold text-white">
                          {active2DPart.relatedDisease}
                        </p>
                        <p className="text-xs text-slate-400">
                          Structural damage or inflammation in this zone triggers progressive visual decline.
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-2">
                      <button
                        onClick={() => navigate(active2DPart.diseaseLink)}
                        className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/50 transition-all hover:-translate-y-0.5"
                      >
                        <span>Learn Disease Treatment ({active2DPart.name})</span>
                        <ChevronRight size={14} />
                      </button>

                      <button
                        onClick={() => setModelType("photorealistic")}
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                      >
                        <Eye size={14} className="text-emerald-400" />
                        <span>Switch to Photorealistic 3D Model</span>
                      </button>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Interactive 2D Diagram (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
                    <Eye2DDiagram
                      parts={defaultAnatomyParts}
                      selectedPartId={selectedStructureId}
                      onSelectPart={(id) => setSelectedStructureId(id)}
                    />

                    {/* Anatomy Part Quick Selection Pills under Diagram */}
                    <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                      {defaultAnatomyParts.map((part) => {
                        const isSelected = selectedStructureId === part.id;
                        return (
                          <button
                            key={part.id}
                            onClick={() => setSelectedStructureId(part.id)}
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
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-0">
              
              {/* Visual Viewport (12 cols if full frame, 8 cols if split) */}
              <div className={`${showSidePanel ? "lg:col-span-8" : "lg:col-span-12"} relative min-h-[560px] md:min-h-[680px] bg-slate-950 flex flex-col justify-center`}>
                {modelType === "photorealistic" ? (
                  <div className="w-full h-full flex-grow flex flex-col min-h-[540px] md:min-h-[660px] relative">
                    <iframe
                      title="Photorealistic Eye Anatomy 3D Model"
                      className="w-full flex-grow border-0 min-h-[500px] md:min-h-[620px]"
                      src="https://sketchfab.com/models/5dac474887174eb78cb7ffce6bd9ce3a/embed?autostart=1&camera=0&preload=1&ui_theme=dark&ui_watermark=0&ui_infos=0&dnt=1"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="bg-slate-950/90 border-t border-slate-800 px-4 py-2 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Sparkles size={13} className="text-emerald-400" />
                        <strong>Hyper-realistic PBR 3D Model:</strong> Drag to rotate • Scroll to zoom • Right-click to pan
                      </span>
                      <span className="text-emerald-400 font-mono">Sketchfab Ophthalmic Asset</span>
                    </div>
                  </div>
                ) : (
                  <Eye3DCanvas
                    selectedStructureId={selectedStructureId}
                    onSelectStructure={(id) => setSelectedStructureId(id)}
                    className="w-full h-full flex-grow"
                  />
                )}
              </div>

              {/* Sidebar Quick-Inspect Panel (4 Cols) */}
              {showSidePanel && (
                <div className="lg:col-span-4 bg-slate-900/90 border-t lg:border-t-0 lg:border-l border-slate-800 p-6 flex flex-col justify-between space-y-6">
                <div>
                  {/* Chamber Filter Tabs */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                      Chamber Filter
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">
                      {filteredStructures.length} Structures
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 mb-6">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`text-xs py-1.5 rounded-lg font-semibold transition-all ${
                        activeTab === "all" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setActiveTab("anterior")}
                      className={`text-xs py-1.5 rounded-lg font-semibold transition-all ${
                        activeTab === "anterior" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Anterior
                    </button>
                    <button
                      onClick={() => setActiveTab("posterior")}
                      className={`text-xs py-1.5 rounded-lg font-semibold transition-all ${
                        activeTab === "posterior" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Posterior
                    </button>
                    <button
                      onClick={() => setActiveTab("vitreous")}
                      className={`text-xs py-1.5 rounded-lg font-semibold transition-all ${
                        activeTab === "vitreous" ? "bg-emerald-600 text-white shadow" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Vitreous
                    </button>
                  </div>

                  {/* Quick Select Buttons */}
                  <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 custom-scrollbar mb-6">
                    {filteredStructures.map((struct) => {
                      const isSelected = struct.id === selectedStructureId;
                      return (
                        <button
                          key={struct.id}
                          onClick={() => setSelectedStructureId(struct.id)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between border ${
                            isSelected
                              ? "bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-950/40"
                              : "bg-slate-950/40 border-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-emerald-400" : "bg-slate-600"}`} />
                            <span className="truncate">{struct.name.split(" (")[0]}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono uppercase shrink-0">
                            {struct.chamber}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Selected Card Info */}
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {selectedStructure.chamberLabel}
                      </span>
                      {selectedStructure.normalPressure && (
                        <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-900/50">
                          {selectedStructure.normalPressure}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white leading-tight">
                      {selectedStructure.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {selectedStructure.subtitle}
                    </p>

                    <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
                      <div>
                        <span className="text-slate-500 font-semibold block text-[10px] uppercase tracking-wider">
                          Key Dimension & Physiology:
                        </span>
                        <span className="text-slate-300 font-mono text-[11px]">
                          {selectedStructure.keyStats}
                        </span>
                      </div>

                      <div>
                        <span className="text-slate-500 font-semibold block text-[10px] uppercase tracking-wider">
                          Primary Physiological Function:
                        </span>
                        <p className="text-slate-300 text-xs leading-snug">
                          {selectedStructure.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Disease Link button */}
                <div className="pt-2">
                  <button
                    onClick={() => navigate(selectedStructure.diseaseLink)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all hover:-translate-y-0.5"
                  >
                    <span>Read Guide: {selectedStructure.diseaseName}</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

                </div>
              )}

            </div>
          )}
        </div>
      </section>

        {/* Anterior vs. Posterior Chamber In-Depth Comparison */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-800/50">
              Anatomical Chamber Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4 mb-3">
              Anterior vs. Posterior Chamber
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              The human eye's anterior segment is divided by the iris diaphragm into two distinct communicative chambers. Understanding their boundaries is critical for diagnosing glaucoma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Anterior Chamber Card */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-900/90 border-2 border-emerald-500/40 rounded-3xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider font-mono">
                  Front Cavity (Camera Anterior)
                </span>
                <span className="text-xs font-mono text-slate-400">Vol: ~200 µL</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                The Anterior Chamber
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Extends from the back surface of the cornea (endothelium) to the anterior face of the iris and the pupillary zone of the lens.
              </p>

              <div className="space-y-4 border-t border-slate-800 pt-6">
                <div>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    Anatomical Boundaries
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    <li><strong>Anterior:</strong> Corneal Endothelium and Trabecular Meshwork</li>
                    <li><strong>Posterior:</strong> Anterior surface of Iris and central Lens dome</li>
                    <li><strong>Peripheral Margin:</strong> Iridocorneal Angle (Filtration Angle)</li>
                    <li><strong>Depth:</strong> 3.0 to 3.4 mm in normal emmetropic adult eyes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    Physiological Role
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Houses aqueous humor circulation, maintains hydrostatic intraocular pressure (10–21 mmHg), and provides oxygen/glucose delivery to the avascular cornea and lens.
                  </p>
                </div>

                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                    <ShieldAlert size={15} />
                    <span>Clinical Correlate: Angle-Closure Glaucoma</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    If the iris moves forward against the cornea, the iridocorneal angle snaps shut, preventing aqueous outflow and driving IOP up to 60+ mmHg within hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Posterior Chamber Card */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-900/90 border-2 border-teal-500/40 rounded-3xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider font-mono">
                  Retro-Iridial Ring (Camera Posterior)
                </span>
                <span className="text-xs font-mono text-slate-400">Vol: ~60 µL</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                The Posterior Chamber
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A triangular ring-shaped space located directly behind the iris and in front of the crystalline lens and suspensory zonules.
              </p>

              <div className="space-y-4 border-t border-slate-800 pt-6">
                <div>
                  <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                    Anatomical Boundaries
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    <li><strong>Anterior:</strong> Posterior pigmented epithelial layer of the Iris</li>
                    <li><strong>Posterior:</strong> Anterior Vitreous face and Lens Zonules (Zonules of Zinn)</li>
                    <li><strong>Medial:</strong> Crystalline lens equator</li>
                    <li><strong>Lateral:</strong> Ciliary processes (corona ciliaris)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                    Physiological Role
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The active manufacturing factory of the eye. Ciliary processes actively pump fresh aqueous humor into this space, which must transit forward through the pupil.
                  </p>
                </div>

                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-1">
                    <Droplets size={15} />
                    <span>Clinical Correlate: Pupillary Block</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    If the iris adheres to the anterior lens capsule, aqueous fluid backs up in the posterior chamber, bowing the peripheral iris forward like a parachute (iris bombé).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Aqueous Humor Flow Dynamics Interactive Simulation */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-cyan-800/40">
                <Droplets size={14} />
                <span>Fluid Dynamics Engine</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                Aqueous Humor Circulation: Step-by-Step Flow
              </h2>
              <p className="text-slate-400 text-sm md:text-base">
                Follow the journey of intraocular fluid from its birth at the ciliary processes to its exit through Schlemm's canal into the bloodstream.
              </p>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-5 gap-2 md:gap-4 mb-8">
              {flowSteps.map((step) => {
                const isActive = step.step === flowStep;
                return (
                  <button
                    key={step.step}
                    onClick={() => setFlowStep(step.step)}
                    className={`p-3 md:p-4 rounded-2xl text-left border transition-all ${
                      isActive
                        ? "bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-900/50 scale-[1.02]"
                        : "bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <div className="text-[10px] md:text-xs font-mono font-bold opacity-80 uppercase">
                      Stage {step.step}
                    </div>
                    <div className="font-bold text-xs md:text-sm truncate mt-1">
                      {step.title.split(". ")[1]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Highlight Box */}
            {(() => {
              const currentStep = flowSteps[flowStep - 1];
              return (
                <div className="bg-slate-950 rounded-2xl p-6 md:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center text-sm border border-emerald-500/30">
                        {currentStep.step}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{currentStep.title}</h3>
                        <p className="text-xs text-emerald-400 font-mono">{currentStep.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {currentStep.desc}
                    </p>
                    <div className="text-xs font-mono text-slate-500">
                      Primary Anatomical Site: <strong className="text-slate-300">{currentStep.location}</strong>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => setFlowStep(prev => prev > 1 ? prev - 1 : 5)}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-all"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      onClick={() => setFlowStep(prev => prev < 5 ? prev + 1 : 1)}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md"
                    >
                      Next Stage →
                    </button>
                  </div>
                </div>
              );
            })()}

          </div>
        </section>

        {/* Clinical Pathologies linked to Anterior / Posterior Chamber Anatomy */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 rounded-3xl p-8 lg:p-12">
            <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Ophthalmic Pathologies
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
                  Conditions Triggered by Chamber Dysfunction
                </h2>
              </div>
              <Link
                to="/medical-library"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group"
              >
                <span>Browse Full Medical Library</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                  Anterior Chamber Angle
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">Glaucoma</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Resistance to aqueous outflow in the trabecular meshwork elevates intraocular pressure, suffocating retinal ganglion cells and cupping the optic disc.
                </p>
                <Link
                  to="/medical-library/glaucoma"
                  className="text-xs text-emerald-400 hover:text-white font-semibold flex items-center gap-1"
                >
                  <span>Explore Glaucoma Protocol</span>
                  <ChevronRight size={13} />
                </Link>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                  Posterior Chamber Lens
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">Cataracts</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Protein aggregation in the biconvex crystalline lens behind the pupil scatters light rays, leading to painless blurring, halos, and color desaturation.
                </p>
                <Link
                  to="/medical-library/cataract"
                  className="text-xs text-emerald-400 hover:text-white font-semibold flex items-center gap-1"
                >
                  <span>Explore Cataract Protocol</span>
                  <ChevronRight size={13} />
                </Link>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                  Anterior Chamber Dome
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">Keratoconus</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Biomechanical breakdown of corneal stromal collagen causes irregular astigmatism, anterior bulging, and acute hydrops if Descemet's membrane ruptures.
                </p>
                <Link
                  to="/medical-library/keratoconus"
                  className="text-xs text-emerald-400 hover:text-white font-semibold flex items-center gap-1"
                >
                  <span>Explore Keratoconus Protocol</span>
                  <ChevronRight size={13} />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
