import Navbar from "../../NavBar";
import { ArrowLeft, CheckCircle2, Eye, Sparkles, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const CataractPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/medical-library" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Medical Library
        </Link>

        {/* Hero Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Eye size={14} />
            CRYSTALLINE LENS • PROTEIN CLUMPING
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Cataracts: <br/>
            <span className="text-amber-600">Restoring Crystal Clarity to Your Vision</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            A cataract is the progressive clouding and opacification of the eye's natural crystalline lens. As the leading cause of reversible blindness worldwide, cataracts affect more than 50% of adults over the age of 80, gradually scattering light before it can reach the retina.
          </p>
        </header>

        {/* Pathophysiology & How It Happens */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
              Biochemical Mechanics
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Why Does the Lens Turn Cloudy?</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The human lens is composed of roughly 65% water and 35% specialized structural proteins called <strong>crystallins</strong>. In a youthful eye, these proteins are arranged with sub-microscopic crystalline precision, allowing light to pass through with zero distortion.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              With age, cumulative oxidative stress, UV photon damage, and enzymatic degradation cause these crystallin proteins to denature and cross-link into insoluble yellow-brown clumps. Instead of focusing sharply onto the fovea, light rays are diffracted and scattered, creating diffuse glare and hazy vision.
            </p>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900">
              <strong>Second Sight Phenomenon:</strong> In early nuclear cataracts, the swelling center of the lens temporarily increases its refractive power, allowing elderly patients to read without reading glasses for a brief period before vision severely dims.
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
              alt="Slit-lamp examination of cataractous lens" 
              className="w-full h-80 object-cover"
            />
            <div className="p-4 bg-slate-900 text-white text-xs flex justify-between items-center">
              <span>Biomicroscopy: Dense Nuclear Opalescence</span>
              <span className="text-amber-400 font-mono font-bold">Grade 3+ Cataract</span>
            </div>
          </div>
        </section>

        {/* The 3 Main Types of Cataracts */}
        <section className="mb-14">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
            The Three Major Anatomical Types
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase block w-fit mb-3">
                  Most Common
                </span>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Nuclear Sclerotic</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Forms deep in the central core (nucleus) of the lens. Causes gradual yellowing or browning (brunescence), washing out blue colors and reducing contrast sensitivity.
                </p>
              </div>
              <div className="text-[11px] font-mono text-amber-800 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                Primary effect: Dull distance vision & washed-out colors.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase block w-fit mb-3">
                  Spoke-Like
                </span>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Cortical Cataract</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Begins as white, wedge-like opacities on the outer edge of the lens cortex. These spokes slowly extend inward toward the center, creating severe glare when light hits from the side.
                </p>
              </div>
              <div className="text-[11px] font-mono text-blue-800 bg-blue-50 p-2.5 rounded-xl border border-blue-200">
                Primary effect: Debilitating glare & halos around oncoming cars.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full uppercase block w-fit mb-3">
                  Fast Progression
                </span>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Posterior Subcapsular</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Forms directly behind the posterior capsule, directly in the visual axis path. Progresses rapidly (months rather than years), especially common in diabetics or prolonged steroid users.
                </p>
              </div>
              <div className="text-[11px] font-mono text-rose-800 bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                Primary effect: Reading vision severely impaired in bright daylight.
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Checklist */}
        <section className="mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles size={22} className="text-amber-500" />
            Recognized Symptoms Checklist
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Diffuse Foggy Sight", desc: "Constant feeling of looking through smeared or frosted glass." },
              { title: "Nighttime Starbursts", desc: "Huge flares and multi-ringed halos radiating around streetlights." },
              { title: "Desaturated Color Vision", desc: "Whites appear creamy or yellowish; blues and purples look black." },
              { title: "Rapid Refraction Drifts", desc: "Spectacle prescription changes repeatedly in a single year." },
              { title: "High Lux Requirement", desc: "Needs an intense direct spotlight or desk lamp to read small text." },
              { title: "Monocular Diplopia", desc: "Seeing two ghosted copies of moon or road signs through one eye." }
            ].map((sym, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 size={16} className="text-amber-600 flex-shrink-0" />
                  <h4 className="font-bold text-sm text-slate-900">{sym.title}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-6">{sym.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Surgical Solutions & IOLs */}
        <section className="mb-14 bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-3xl">
          <div className="max-w-3xl mb-8">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-emerald-500/30">
              Gold Standard Cure
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mb-3">
              Phacoemulsification & Premium Intraocular Lenses (IOLs)
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Cataract surgery is the most frequently performed and successful surgery in modern medicine, boasting a &gt;98% success rate. The cloudy lens is replaced with a permanent biocompatible acrylic lens in under 15 minutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-bold text-cyan-300 uppercase block mb-1">Standard</span>
              <h4 className="font-bold text-white text-sm mb-2">Monofocal IOL</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Set for sharp distance vision. Reading glasses are still worn for close-up phone or book reading.
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-bold text-emerald-300 uppercase block mb-1">Astigmatism</span>
              <h4 className="font-bold text-white text-sm mb-2">Toric IOL</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specially oriented to counteract corneal astigmatism, eliminating the need for distance glasses.
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-bold text-amber-300 uppercase block mb-1">Full Range</span>
              <h4 className="font-bold text-white text-sm mb-2">Multifocal / Trifocal</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Diffractive rings split light to provide distance, intermediate (computer), and near reading vision.
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-bold text-purple-300 uppercase block mb-1">Seamless</span>
              <h4 className="font-bold text-white text-sm mb-2">Extended Depth (EDOF)</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Elongates the focal point for smooth continuous vision from distance to arm's length with minimal halos.
              </p>
            </div>
          </div>
        </section>

        {/* Post-Op Recovery Timeline */}
        <section className="mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Clock size={22} className="text-emerald-600" />
            Post-Operative Recovery Timeline
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">First 24-48 Hours</span>
              <h4 className="font-bold text-sm text-slate-900 mb-2">Immediate Brightness</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Colors appear intensely vivid and bright. Mild foreign-body scratchiness is common. Wear protective eye shield while sleeping.
              </p>
            </div>

            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">Week 1 to 2</span>
              <h4 className="font-bold text-sm text-slate-900 mb-2">Visual Stabilization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pupil swelling subsides. Antibiotic and anti-inflammatory eye drops are tapered. Avoid heavy lifting or swimming.
              </p>
            </div>

            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">Week 4 to 6</span>
              <h4 className="font-bold text-sm text-slate-900 mb-2">Final Prescription</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full anatomical healing complete. Final refraction measured for optional fine-tuning reading glasses.
              </p>
            </div>
          </div>
        </section>

        {/* Action Footer with Eye Blinking Button */}
        <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-amber-950 mb-1">Explore Other Eye Conditions</h3>
            <p className="text-xs text-amber-800">Review Glaucoma, Diabetic Retinopathy, and Macular Degeneration.</p>
          </div>
          <button
            onClick={() => navigate("/medical-library")}
            className="know-more-button whitespace-nowrap"
          >
            <span>Back to Library</span>
          </button>
        </div>

      </main>
    </div>
  );
};
