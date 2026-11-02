import Navbar from "../../NavBar";
import { ArrowLeft, CheckCircle2, AlertTriangle, Eye, HeartPulse } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const DiabeticRetinopathyPage = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold tracking-wide uppercase mb-4">
            <Eye size={14} />
            RETINAL MICROVASCULATURE • DIABETIC COMPLICATIONS
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Diabetic Retinopathy: <br/>
            <span className="text-emerald-600">Preserving Vision in Type 1 & Type 2 Diabetes</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Diabetic Retinopathy (DR) is the primary microvascular complication of diabetes and the leading cause of blindness in working-age adults (20-74 years). Chronically elevated blood glucose damages the delicate capillary beds nourishing the retina, triggering ischemia, fluid leakage, and abnormal vascular proliferation.
          </p>
        </header>

        {/* Pathophysiology & Mechanisms */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">
              Microvascular Mechanics
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">How High Sugar Destroys Retinal Vessels</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Retinal capillaries rely on contractile cells called <strong>pericytes</strong> to maintain blood-retinal barrier integrity. Persistent hyperglycemia leads to pericyte apoptosis, basement membrane thickening, and microthrombosis.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              As capillaries occlude, the retina experiences severe oxygen starvation (ischemia). In response, retinal cells overexpress <strong>Vascular Endothelial Growth Factor (VEGF)</strong>, stimulating the frantic growth of weak, hyper-permeable new blood vessels that bleed easily into the vitreous gel.
            </p>
            <div className="p-4 bg-red-50 rounded-2xl border border-red-200 text-xs text-red-900">
              <strong>Diabetic Macular Edema (DME):</strong> The leading cause of vision loss in diabetics, occurring when leaking fluid infiltrates the foveal layers, causing swelling and permanent photoreceptor damage.
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
              alt="Digital Fundus Photography of Diabetic Retina" 
              className="w-full h-80 object-cover"
            />
            <div className="p-4 bg-slate-900 text-white text-xs flex justify-between items-center">
              <span>Color Fundus: Microaneurysms & Flame Hemorrhages</span>
              <span className="text-emerald-400 font-mono font-bold">AI Screening Detected</span>
            </div>
          </div>
        </section>

        {/* 4 Clinical Stages */}
        <section className="mb-14">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
            The 4 Clinical Staging Tiers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase block w-fit mb-3">
                  Stage 1
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Mild NPDR</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Microaneurysms only. Tiny pouch-like ballooning in capillary walls. Vision is completely unaffected and asymptomatic.
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 p-2 rounded-lg">Annual AI Fundus Screening</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase block w-fit mb-3">
                  Stage 2
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Moderate NPDR</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Dot and blot hemorrhages, hard lipid exudates from plasma leakage, and cotton-wool spots (nerve fiber layer micro-infarcts).
                </p>
              </div>
              <span className="text-[11px] font-mono text-amber-700 bg-amber-50 p-2 rounded-lg">Check every 6 months</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-orange-800 bg-orange-100 px-3 py-1 rounded-full uppercase block w-fit mb-3">
                  Stage 3 (Pre-proliferative)
                </span>
                <h3 className="font-bold text-slate-900 text-base mb-2">Severe NPDR</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Diagnosed by the 4-2-1 rule: severe hemorrhages in all 4 quadrants, venous beading in &ge;2 quadrants, or IRMA in &ge;1 quadrant.
                </p>
              </div>
              <span className="text-[11px] font-mono text-orange-700 bg-orange-50 p-2 rounded-lg">50% convert to PDR in 1 yr</span>
            </div>

            <div className="bg-white p-5 rounded-2xl border-2 border-rose-200 shadow-sm flex flex-col justify-between bg-rose-50/20">
              <div>
                <span className="text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full uppercase block w-fit mb-3">
                  Stage 4 (Proliferative)
                </span>
                <h3 className="font-bold text-rose-950 text-base mb-2">PDR</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Neovascularization at optic disc (NVD) or retina (NVE). Fragile vessels bleed into vitreous or cause tractional retinal detachment.
                </p>
              </div>
              <span className="text-[11px] font-mono text-rose-700 bg-rose-100 p-2 rounded-lg font-bold">Urgent Anti-VEGF / PRP</span>
            </div>
          </div>
        </section>

        {/* Symptoms Overview */}
        <section className="mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertTriangle size={22} className="text-amber-500" />
            Warning Signs You Must Never Ignore
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Sudden Floaters Shower", desc: "Dark streaks or soot floating in vision from microscopic vitreous hemorrhage." },
              { title: "Fluctuating Acuity", desc: "Vision sharp in the morning but blurred in afternoon as blood sugar shifts." },
              { title: "Metamorphopsia", desc: "Distorted central foveal perception caused by macular fluid thickening." },
              { title: "Dark Empty Patches", desc: "Permanent blind scotomas where capillary non-perfusion has killed photoreceptors." },
              { title: "Night Blindness", desc: "Severe difficulty adjusting to twilight and dark movie theaters." },
              { title: "Total Sudden Blackout", desc: "Large vitreous hemorrhage obstructing the optical axis entirely." }
            ].map((sym, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                  <h4 className="font-bold text-sm text-slate-900">{sym.title}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-6">{sym.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Treatment Matrix */}
        <section className="mb-14 bg-slate-900 text-white p-8 rounded-3xl">
          <div className="max-w-3xl mb-8">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 inline-block border border-emerald-500/30">
              Clinical Interventions
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mb-3">
              Modern Medical & Surgical Therapies
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Early detection coupled with rapid anti-VEGF or laser photocoagulation prevents &gt;90% of severe vision loss.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-bold text-emerald-400 uppercase block mb-1">First Line</span>
              <h4 className="font-bold text-white text-base mb-2">Anti-VEGF Injections</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Intravitreal biologics (Aflibercept, Faricimab, Ranibizumab) that directly inhibit vascular permeability, reabsorb macular fluid, and shrink neovascular fronds.
              </p>
              <div className="text-[11px] font-mono text-emerald-300">Administered monthly in clinic</div>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-bold text-cyan-400 uppercase block mb-1">Laser Therapy</span>
              <h4 className="font-bold text-white text-base mb-2">Panretinal Photocoagulation (PRP)</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Thermal laser burns applied to the ischemic peripheral retina to reduce total retinal metabolic demand and shut down VEGF triggers.
              </p>
              <div className="text-[11px] font-mono text-cyan-300">Preserves critical central sight</div>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
              <span className="text-xs font-bold text-rose-400 uppercase block mb-1">Surgical</span>
              <h4 className="font-bold text-white text-base mb-2">Pars Plana Vitrectomy</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Microsurgical removal of blood-filled vitreous gel and delicate peeling of fibrovascular membranes pulling on the retina.
              </p>
              <div className="text-[11px] font-mono text-rose-300">For non-clearing vitreous bleeding</div>
            </div>
          </div>
        </section>

        {/* Systemic Control ABCs */}
        <section className="mb-14 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HeartPulse size={22} className="text-rose-600" />
            The ABCs of Preventing Retinal Progression
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-2xl font-serif font-bold text-emerald-600 block mb-1">A &bull; HbA1c</span>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Target: &lt; 7.0%</h4>
              <p className="text-xs text-slate-600">Every 1% reduction in HbA1c reduces risk of eye complications by 35%.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-2xl font-serif font-bold text-cyan-600 block mb-1">B &bull; Blood Pressure</span>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Target: &lt; 130/80 mmHg</h4>
              <p className="text-xs text-slate-600">Hypertension directly increases shear stress on already fragile capillaries.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-2xl font-serif font-bold text-amber-600 block mb-1">C &bull; Cholesterol</span>
              <h4 className="font-bold text-sm text-slate-900 mb-1">Target: LDL &lt; 70 mg/dL</h4>
              <p className="text-xs text-slate-600">Elevated lipids leak through permeable vessels forming sight-threatening hard exudates.</p>
            </div>
          </div>
        </section>

        {/* Action Footer with Eye Blinking Button */}
        <div className="bg-emerald-50 border-2 border-emerald-200 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-emerald-950 mb-1">Explore Other Eye Conditions</h3>
            <p className="text-xs text-emerald-800">Learn about Glaucoma, Cataracts, Macular Degeneration, and Keratoconus.</p>
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
