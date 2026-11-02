import Navbar from "../../NavBar";
import { ArrowLeft, CheckCircle2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const KeratoconusPage = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Eye size={14} />
            CORNEAL BIOMECHANICS • STRUCTURAL ECTASIA
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Keratoconus: <br/>
            <span className="text-teal-600">Understanding Corneal Ectasia</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Keratoconus is a progressive eye condition in which the normally round, dome-like cornea thins and begins to bulge outward into a cone-like shape. This conical distortion deflects light entering the eye, causing severe irregular astigmatism, ghosting, and blurred vision.
          </p>
        </header>

        {/* What Happens Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-900">The Biomechanics of Keratoconus</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The cornea is held in shape by collagen fibrils. In keratoconus, enzymatic imbalances and oxidative stress cause these collagen fibers to weaken and slip past one another. Under normal intraocular pressure, the weakened tissue yields and protrudes forward.
            </p>
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl text-xs text-teal-900 space-y-1">
              <strong className="block text-teal-950 font-bold">Important Clinical Warning:</strong>
              <span>Vigorous and chronic eye rubbing is strongly correlated with rapid keratoconus progression. Patients are strictly advised to avoid mechanical rubbing and treat ocular allergies immediately.</span>
            </div>
            <div className="pt-2">
              <h4 className="font-bold text-slate-900 text-sm mb-2">Key Diagnostic Technologies:</h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-teal-600" />
                  <strong>Corneal Topography & Tomography (Pentacam):</strong> Creates 3D elevation curvature maps.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-teal-600" />
                  <strong>Pachymetry:</strong> Measures corneal thickness down to microns.
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1602573991396-fb69ee6d7a0d?auto=format&fit=crop&w=800&q=80"
              alt="Corneal Close Up Examination"
              className="w-full h-80 object-cover"
            />
            <div className="p-4 bg-slate-900 text-white text-xs">
              <p className="font-bold text-teal-400">Slit-Lamp Microscopy: Vogt's Striae & Fleischer's Ring</p>
              <p className="text-slate-400 mt-1">Stress lines and iron deposits marking the base of the corneal cone.</p>
            </div>
          </div>
        </section>

        {/* Symptoms Breakdown */}
        <section className="mb-14">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
            Common Signs & Visual Distortions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Monocular Polyopia",
                desc: "Seeing multiple 'ghost' images or shadows around letters and lights even with glasses."
              },
              {
                title: "Rapid Prescription Shifts",
                desc: "Frequent sudden changes in spectacle prescription, particularly increasing irregular astigmatism."
              },
              {
                title: "Halos & Starbursts",
                desc: "Extreme glare and flares radiating from headlights, making night driving difficult."
              },
              {
                title: "Corneal Hydrops (Late)",
                desc: "Sudden rupture of Descemet's membrane causing painful corneal swelling and opacification."
              }
            ].map((sym, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{sym.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{sym.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Treatment Staging */}
        <section className="bg-slate-900 text-white p-8 rounded-3xl mb-14">
          <h2 className="text-2xl font-serif font-bold mb-6">Modern Treatment Progression</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block mb-1">Disease Halting</span>
              <h3 className="font-bold text-white text-base mb-2">Corneal Cross-Linking (CXL)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Riboflavin (Vitamin B2) drops combined with controlled UVA light create chemical bonds between collagen fibers, stiffening the cornea and halting progression in 95% of patients.
              </p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block mb-1">Visual Rehabilitation</span>
              <h3 className="font-bold text-white text-base mb-2">Scleral & RGP Lenses</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Large diameter scleral contact lenses vault entirely over the irregular cone and rest on the white sclera, creating a smooth artificial optical surface filled with saline reservoir.
              </p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block mb-1">Advanced / Scarring</span>
              <h3 className="font-bold text-white text-base mb-2">Corneal Transplant (DALK / PKP)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                For severely scarred or thinned corneas, Deep Anterior Lamellar Keratoplasty (DALK) replaces the diseased stroma while preserving the healthy recipient endothelium.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
