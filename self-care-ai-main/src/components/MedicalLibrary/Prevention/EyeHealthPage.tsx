import Navbar from "../../NavBar";
import { Apple, Activity, CigaretteOff, Sun, Glasses, Monitor, Hand, Eye, ArrowLeft, ShieldCheck, HeartPulse } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const EyeHealthPage = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tips = [
    {
      icon: <Apple size={30} />,
      title: "Macular & Retinal Nutrition",
      content: "Feed your photoreceptors. Omega-3 fatty acids (DHA/EPA in wild salmon), Lutein & Zeaxanthin (dark leafy spinach & kale), and Zinc (seeds & legumes) protect against AMD and cataracts.",
      color: "from-emerald-400/20 to-green-300/20",
      border: "border-l-emerald-400",
      accent: "text-emerald-700"
    },
    {
      icon: <Activity size={30} />,
      title: "Vascular Aerobic Exercise",
      content: "Brisk walking or cycling for 30 minutes lowers intraocular pressure (IOP) by 15-20% and promotes microvascular perfusion to the optic nerve head, mitigating glaucoma risk.",
      color: "from-cyan-400/20 to-blue-300/20",
      border: "border-l-cyan-400",
      accent: "text-cyan-700"
    },
    {
      icon: <CigaretteOff size={30} />,
      title: "Zero Tobacco Exposure",
      content: "Smoking directly doubles the risk of Wet Age-Related Macular Degeneration and accelerates crystallin protein clumping in cataracts. Quitting allows antioxidant recovery.",
      color: "from-rose-400/20 to-red-300/20",
      border: "border-l-rose-400",
      accent: "text-rose-700"
    },
    {
      icon: <Sun size={30} />,
      title: "100% UV400 Sunglasses",
      content: "Prolonged exposure to ultraviolet rays (UVA & UVB) causes photokeratitis, pterygium (surfer's eye), and cortical cataract formation. Always ensure sunglasses are rated UV400.",
      color: "from-amber-400/20 to-yellow-300/20",
      border: "border-l-amber-400",
      accent: "text-amber-700"
    },
    {
      icon: <Glasses size={30} />,
      title: "Safety Eyewear & Sports Protection",
      content: "Polycarbonate safety lenses withstand high-velocity impact during DIY home repairs, chemical handling, and racquet sports, preventing 90% of traumatic retinal detachments.",
      color: "from-slate-400/20 to-gray-300/20",
      border: "border-l-slate-400",
      accent: "text-slate-700"
    },
    {
      icon: <Monitor size={30} />,
      title: "Digital Ergonomics & 20-20-20 Rule",
      content: "Position screens 20-24 inches from eyes, 15 degrees below horizontal gaze. Follow the 20-20-20 rule to stimulate natural meibomian blinking and relieve ciliary fatigue.",
      color: "from-indigo-400/20 to-purple-300/20",
      border: "border-l-indigo-400",
      accent: "text-indigo-700"
    },
    {
      icon: <Hand size={30} />,
      title: "Sterile Contact Lens & Eye Hygiene",
      content: "Never sleep in contact lenses or rinse cases with tap water (which harbors deadly Acanthamoeba). Cleanse eyelid margins daily to avoid blepharitis and styes.",
      color: "from-teal-400/20 to-emerald-300/20",
      border: "border-l-teal-400",
      accent: "text-teal-700"
    },
    {
      icon: <Eye size={30} />,
      title: "Comprehensive Dilated Eye Exams",
      content: "Silent killers like early Glaucoma and Diabetic Retinopathy produce zero symptoms in initial stages. Dilated exams or annual AI retinal scans detect changes years before vision drops.",
      color: "from-violet-400/20 to-purple-300/20",
      border: "border-l-violet-400",
      accent: "text-violet-700"
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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
            <ShieldCheck size={14} />
            PREVENTIVE OPHTHALMIC CARE
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            How to Keep Your <br />
            <span className="text-emerald-600">Eyes Healthy for Life</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            Over 50% of global visual impairment is preventable through early clinical detection, targeted carotenoid nutrition, and daily protective habits. Here are doctor-approved guidelines for lifelong ocular wellness.
          </p>
        </header>

        {/* 8 Core Pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 border-l-4 ${tip.border} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-2xl bg-slate-50 border border-slate-100 ${tip.accent}`}>
                    {tip.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${tip.accent}`}>
                    {index + 1}. {tip.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {tip.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Superfoods Grid */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-14">
          <div className="flex items-center gap-3 mb-6">
            <HeartPulse size={24} className="text-rose-500" />
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              The AREDS-2 Superfood Matrix for Eyes
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <span className="text-2xl mb-1 block">🥬</span>
              <h4 className="font-bold text-sm text-emerald-950">Kale & Spinach</h4>
              <p className="text-xs text-emerald-800 mt-1">Dense in Lutein and Zeaxanthin; filters blue light photons.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <span className="text-2xl mb-1 block">🐟</span>
              <h4 className="font-bold text-sm text-blue-950">Wild Salmon</h4>
              <p className="text-xs text-blue-800 mt-1">High in DHA Omega-3s; maintains retinal membrane fluidity.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <span className="text-2xl mb-1 block">🍊</span>
              <h4 className="font-bold text-sm text-amber-950">Citrus & Papaya</h4>
              <p className="text-xs text-amber-800 mt-1">Vitamin C antioxidants fight free radicals in lens fluid.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
              <span className="text-2xl mb-1 block">🫐</span>
              <h4 className="font-bold text-sm text-purple-950">Bilberries & Nuts</h4>
              <p className="text-xs text-purple-800 mt-1">Anthocyanins & Vitamin E to safeguard optic microvessels.</p>
            </div>
          </div>
        </section>

        {/* Action Footer with Signature Eye Blinking Button */}
        <div className="bg-emerald-50 border-2 border-emerald-200 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-emerald-950 mb-1">Check 8 Easy Eye Exercises</h3>
            <p className="text-xs text-emerald-800">Learn practical exercises with our live 20-20-20 interactive countdown timer.</p>
          </div>
          <button
            onClick={() => navigate("/medical-library/eye-exercises")}
            className="know-more-button whitespace-nowrap"
          >
            <span>Try Eye Exercises</span>
          </button>
        </div>

      </main>
    </div>
  );
};