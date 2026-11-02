import React, { useState } from "react";
import Navbar from "../../NavBar";
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const MacularDegenerationPage = () => {
  const [activeTab, setActiveTab] = useState<'dry' | 'wet'>('dry');

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4">
            <Eye size={14} />
            CENTRAL RETINAL HEALTH • MACULA
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Age-Related <br/>
            <span className="text-emerald-600">Macular Degeneration (AMD)</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Age-Related Macular Degeneration is the leading cause of irreversible vision loss in adults over 50. It gradually degrades the <strong className="text-slate-900">macula</strong>, the small central area of the retina responsible for sharp, straight-ahead vision necessary for reading, driving, and recognizing faces.
          </p>
        </header>

        {/* Interactive Comparison: Dry vs Wet AMD */}
        <section className="mb-14 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">The Two Forms of AMD</h2>
              <p className="text-sm text-slate-500">Compare pathophysiology, progression speeds, and treatments</p>
            </div>
            <div className="flex bg-slate-100 p-1.5 rounded-2xl">
              <button
                onClick={() => setActiveTab('dry')}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'dry'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dry AMD (85-90%)
              </button>
              <button
                onClick={() => setActiveTab('wet')}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeTab === 'wet'
                    ? 'bg-white text-rose-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Wet AMD (10-15%)
              </button>
            </div>
          </div>

          {activeTab === 'dry' ? (
            <div className="grid md:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Atrophic AMD • Slow Progression
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Drusen Deposits & Cellular Thinning</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Dry AMD occurs when parts of the macula get thinner with age and tiny clumps of protein and lipid deposits called <strong>drusen</strong> accumulate under the retina. This slowly degrades the light-sensing photoreceptor cells.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    Slow, gradual loss of central vision over many years
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    Needs brighter lighting for fine reading
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    Can convert into wet AMD without warning
                  </li>
                </ul>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-900">
                  <strong>Management:</strong> Preservision AREDS-2 antioxidant formulation (Vitamin C, E, Zinc, Copper, Lutein, Zeaxanthin) proven to reduce progression by 25%.
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80"
                  alt="Retinal Fundus Scan Examination"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-slate-900 text-white text-xs flex justify-between items-center">
                  <span>Fundus Photography: Yellow Drusen Specks</span>
                  <span className="text-emerald-400 font-mono">Stage: Intermediate</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                  Neovascular AMD • Rapid Emergency
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Abnormal Leaking Blood Vessels</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Wet AMD occurs when abnormal, fragile blood vessels grow under the retina (Choroidal Neovascularization). These vessels leak blood, lipids, and fluid into the macula, causing rapid scarring and sudden central blind spots.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-rose-500" />
                    Sudden onset distortion where straight doorframes look bent
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-rose-500" />
                    Dark, blank void directly in the center of gaze
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-rose-500" />
                    Permanent scarring if not treated within days
                  </li>
                </ul>
                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 text-xs text-rose-900">
                  <strong>Gold Standard Treatment:</strong> Intravitreal Anti-VEGF injections (Aflibercept, Ranibizumab, Faricimab) that bind to vascular growth factors and stop leakage.
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80"
                  alt="Optical Coherence Tomography (OCT) scan"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-slate-900 text-white text-xs flex justify-between items-center">
                  <span>OCT Cross-Section: Subretinal Fluid Infiltration</span>
                  <span className="text-rose-400 font-mono">Immediate Anti-VEGF</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* The Amsler Grid Self-Test */}
        <section className="mb-14 bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-3xl relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                Home Screening Tool
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">The Amsler Grid Test</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                The Amsler grid is a simple 10x10cm grid of horizontal and vertical lines used by ophthalmologists to detect early macular changes. In a healthy eye, all lines appear straight and continuous. In AMD, lines appear wavy, curved, or broken.
              </p>
              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <p>1. Wear your normal reading glasses and cover one eye.</p>
                <p>2. Stare directly at the center black dot from 14 inches away.</p>
                <p>3. Notice if any grid lines appear wavy, blurry, or missing.</p>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              {/* Graphic Amsler Grid SVG */}
              <div className="w-56 h-56 bg-white p-3 rounded-2xl shadow-2xl flex flex-col items-center justify-center relative">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-slate-900 stroke-[0.8]">
                  {/* Grid Lines */}
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((pos) => (
                    <React.Fragment key={pos}>
                      <line x1="5" y1={pos} x2="95" y2={pos} />
                      <line x1={pos} y1="5" x2={pos} y2="95" />
                    </React.Fragment>
                  ))}
                  {/* Center Dot */}
                  <circle cx="50" cy="50" r="3.5" fill="#000" />
                </svg>
                <span className="text-[10px] text-slate-600 font-mono mt-1 font-bold">Amsler Grid Calibration</span>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms & Risk Factors Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Zap size={20} className="text-amber-500" /> Key Warning Symptoms
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                <span><strong>Metamorphopsia:</strong> Straight telephone poles or window blinds appear bowed or crooked.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                <span><strong>Central Scotoma:</strong> A dark or empty grey blob in the center of what you are looking at.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                <span><strong>Facial Recognition Deficits:</strong> Inability to see features of loved ones straight ahead.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck size={20} className="text-emerald-500" /> Major Risk Factors
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                <span><strong>Age:</strong> Incidence increases steeply after age 60.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                <span><strong>Smoking:</strong> Doubles the risk and accelerates progression to Wet AMD.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                <span><strong>Genetics & Family History:</strong> Complement factor H (CFH) and ARMS2 gene variants.</span>
              </li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
};
