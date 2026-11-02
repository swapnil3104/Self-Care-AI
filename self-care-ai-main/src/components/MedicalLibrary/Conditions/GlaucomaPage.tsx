import Navbar from "../../NavBar";
import { ArrowLeft, AlertTriangle, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const GlaucomaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/medical-library" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Medical Library
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Eye size={14} />
            OPTIC NERVE PATHOLOGY • ELEVATED IOP
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Glaucoma: <br/>
            <span className="text-emerald-600">The Silent Thief of Sight</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Glaucoma is a group of progressive optic neuropathies characterized by retinal ganglion cell death and optic nerve cupping. It is the second leading cause of irreversible blindness worldwide, affecting over 80 million individuals.
          </p>
        </header>

        <article className="prose prose-lg prose-slate max-w-none">
          {/* Pathophysiology Grid */}
          <section className="mb-14 grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                Fluid Outflow Dynamics
              </span>
              <h2 className="text-3xl font-serif font-bold text-slate-900">What Happens Inside the Eye?</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                The ciliary body continuously secretes <strong>aqueous humor</strong>, a transparent nutrient fluid. Under normal physiology, this fluid exits through the <strong>trabecular meshwork</strong> and Schlemm's canal into the bloodstream. When this drainage pathway is clogged or resistant, fluid builds up, elevating Intraocular Pressure (IOP) beyond the normal 10-21 mmHg range.
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-900">
                <strong>Axonal Compression:</strong> High pressure physically crushes delicate axons at the lamina cribrosa, causing gradual apoptosis of retinal nerve fibers.
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" 
                alt="Glaucoma Retinal Examination" 
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-slate-900 text-white text-xs flex justify-between">
                <span>Optic Cup-to-Disc (CDR) Examination</span>
                <span className="text-emerald-400 font-mono">Normal CDR: &lt; 0.4</span>
              </div>
            </div>
          </section>

          {/* Why The Silent Thief */}
          <section className="mb-14 bg-gradient-to-br from-slate-900 to-emerald-950 text-white p-8 rounded-3xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-4 border border-emerald-500/30">
                <AlertTriangle size={14} />
                <span>Asymptomatic Progression</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Why Glaucoma Has No Early Symptoms
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Unlike acute infections or injuries, Open-Angle Glaucoma causes zero pain, redness, or initial blurring. The human brain automatically fills in peripheral blind spots (perceptual filling-in), meaning patients frequently lose 40% of their optic nerve fibers before noticing visual changes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Early Stage</span>
                  <p className="text-xs text-slate-200">Subtle peripheral arcuate scotomas, easily missed during normal head turns.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Advanced Stage</span>
                  <p className="text-xs text-slate-200">Constriction into narrow tunnel vision, difficulty navigating steps and driving.</p>
                </div>
              </div>
            </div>
          </section>

          {/* The Types */}
          <section className="mb-14">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Clinical Classifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase">90% of Cases</span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">Primary Open-Angle Glaucoma (POAG)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The drainage angle formed by the cornea and iris remains open, but the trabecular meshwork microscopic channels are partially blocked. Pressure builds gradually and painless loss progresses over months to years.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-rose-200 shadow-sm bg-rose-50/20">
                <span className="text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full uppercase">Acute Emergency</span>
                <h3 className="text-xl font-bold text-rose-950 mt-3 mb-2">Angle-Closure Glaucoma</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The iris bows forward, completely sealing the drainage angle. Intraocular pressure spikes dramatically within hours, causing intense eye pain, headaches, nausea, red eyes, and rainbow halos around lights.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnostic Modalities */}
          <section className="mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">How AI & Ophthalmologists Detect Glaucoma</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">1</div>
                <h4 className="font-bold text-sm text-slate-900">Applanation Tonometry</h4>
                <p className="text-xs text-slate-600">Goldmann tonometry measures millimeter-precise intraocular pressure (IOP).</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">2</div>
                <h4 className="font-bold text-sm text-slate-900">Optical Coherence Tomography (OCT)</h4>
                <p className="text-xs text-slate-600">High-resolution cross-sectional scans of the Retinal Nerve Fiber Layer (RNFL) thickness.</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">3</div>
                <h4 className="font-bold text-sm text-slate-900">Humphrey Visual Field (HVF)</h4>
                <p className="text-xs text-slate-600">Standard automated perimetry mapping blind spots and sensitivity across 30 degrees.</p>
              </div>
            </div>
          </section>

          {/* Treatment Options */}
          <section className="mb-14">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Treatment Protocols</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl mb-3">💧</div>
                <h3 className="font-bold text-slate-900 mb-2">Prostaglandin Analogs & Beta-Blockers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Daily eye drops like Latanoprost or Timolol enhance uveoscleral outflow or curb fluid production.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-bold text-slate-900 mb-2">Selective Laser Trabeculoplasty (SLT)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Gentle low-energy laser pulses treat pigment cells in the trabecular meshwork to stimulate natural drainage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl mb-3">🔬</div>
                <h3 className="font-bold text-slate-900 mb-2">MIGS & Trabeculectomy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Minimally Invasive Glaucoma Surgery (iStent) or surgical filtration blebs when pressure cannot be controlled with medications.
                </p>
              </div>
            </div>
          </section>

          {/* Action Footer */}
          <div className="bg-emerald-50 border-2 border-emerald-200 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-emerald-950 mb-1">Check Other Eye Conditions</h3>
              <p className="text-xs text-emerald-800">Learn about Cataracts, Diabetic Retinopathy, and Macular Degeneration.</p>
            </div>
            <button
              onClick={() => navigate("/medical-library")}
              className="know-more-button whitespace-nowrap"
            >
              <span>Back to Library</span>
            </button>
          </div>

        </article>
      </main>
    </div>
  );
};
