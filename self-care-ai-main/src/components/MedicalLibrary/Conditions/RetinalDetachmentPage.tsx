import Navbar from "../../NavBar";
import { ArrowLeft, AlertOctagon, ShieldAlert, Sparkles, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const RetinalDetachmentPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/medical-library" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Medical Library
        </Link>

        {/* Emergency Alert Banner */}
        <div className="bg-rose-50 border-2 border-rose-300 p-6 rounded-3xl mb-10 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/30">
            <AlertOctagon size={32} />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-rose-900 font-bold text-lg">Medical Ophthalmic Emergency</h3>
            <p className="text-rose-800 text-sm leading-relaxed">
              Retinal detachment requires urgent emergency care. If you experience sudden flashes of light, a sudden shower of floaters, or a dark shadow covering your visual field, go to an eye hospital or emergency room immediately.
            </p>
          </div>
        </div>

        {/* Hero Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Eye size={14} />
            VITREORETINAL URGENCY • SURGICAL CARE
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Retinal Detachment: <br/>
            <span className="text-rose-600">Preserving Vision in Critical Moments</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Retinal detachment occurs when the thin layer of tissue at the back of the eye (the retina) pulls away from its normal position, separating from the blood vessels that provide oxygen and essential nourishment. The longer detachment goes untreated, the higher the risk of permanent vision loss.
          </p>
        </header>

        {/* Anatomy & Mechanism Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-slate-900">How Retinal Detachment Happens</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              As we age, the gel-like vitreous humor inside the eye shrinks and pulls away from the retina (Posterior Vitreous Detachment). If it tugs too hard, it can tear the retina. Liquid vitreous then seeps through the tear and lifts the retina off the underlying retinal pigment epithelium (RPE), like peeling wet wallpaper off a wall.
            </p>
            <div className="space-y-2 pt-2">
              <h4 className="font-bold text-slate-900 text-sm">Three Clinical Types:</h4>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong>1. Rhegmatogenous (Most Common):</strong> Caused by a retinal tear or hole that lets fluid under the retina.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong>2. Tractional:</strong> Scar tissue on the retinal surface pulls the retina away, common in proliferative diabetic retinopathy.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                <strong>3. Exudative:</strong> Fluid accumulates beneath the retina without tears, caused by inflammation, tumors, or vascular disorders.
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
              alt="Ophthalmic Retinal Examination"
              className="w-full h-80 object-cover"
            />
            <div className="p-4 bg-slate-900 text-white text-xs">
              <p className="font-bold text-emerald-400">Clinical Finding: Retinal Horseshoe Tear</p>
              <p className="text-slate-400 mt-1">Requires immediate argon laser retinopexy to seal before total detachment.</p>
            </div>
          </div>
        </section>

        {/* Warning Signs Triad */}
        <section className="mb-14">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
            The Three Classic Warning Signs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm flex flex-col justify-between hover:border-rose-400 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">1. Photopsia (Flashes)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sudden brief flashes of light, lightning streaks, or sparks in the corner of your eye, especially in dark environments.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-600 mt-4 block">Physical vitreous traction on retina</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm flex flex-col justify-between hover:border-rose-400 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">2. Floaters Shower</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A sudden appearance of dozens of black spots, cobwebs, or pepper specks drifting across your vision (caused by microscopic blood droplets).
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-600 mt-4 block">Vascular tear & vitreous hemorrhage</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-rose-200 shadow-sm flex flex-col justify-between bg-rose-50/20">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="font-bold text-lg text-rose-950 mb-2">3. The Dark Curtain</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A shadow or dark gray curtain spreading from the peripheral field across the center of your sight.
                </p>
              </div>
              <span className="text-xs font-semibold text-rose-600 mt-4 block">Active detachment advancing</span>
            </div>
          </div>
        </section>

        {/* Surgical Treatments */}
        <section className="bg-slate-900 text-white p-8 rounded-3xl mb-14">
          <h2 className="text-2xl font-serif font-bold mb-6">Surgical Treatment Modalities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-emerald-400 text-base mb-2">Laser & Cryopexy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                For tears without full detachment. Thermal laser burns or freezing probes create a scar that securely tethers the retina to underlying wall.
              </p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-emerald-400 text-base mb-2">Pneumatic Retinopexy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A gas bubble is injected into the vitreous space to press the tear shut while laser scars form. Strict head positioning required.
              </p>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-emerald-400 text-base mb-2">Pars Plana Vitrectomy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The vitreous gel is surgically removed and replaced with gas or silicone oil, flattening the retina against the back of the eye.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
