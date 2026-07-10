import Navbar from "../../NavBar";
import {  Apple, Activity, CigaretteOff, Sun, Glasses, Monitor, Hand, Eye, Sparkles, EyeOff, Palette } from "lucide-react";

import { useState, useEffect } from "react";

export const EyeHealthPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tips = [
    {
      icon: <Apple size={32} />,
      title: "Eat Well for Better Eye Health",
      content: "Nutrients like omega-3 fatty acids, lutein, zinc, and vitamins C and E can ward off age-related vision issues. Eat green leafy veggies, oily fish, eggs, nuts, and citrus fruits.",
      color: "from-emerald-400/20 to-green-300/20",
      border: "border-l-emerald-400",
      accent: "text-emerald-600"
    },
    {
      icon: <Activity size={32} />,
      title: "Exercise Regularly",
      content: "Exercise increases blood and nutrient flow to your eyes. It reduces oxidative stress and helps maintain a healthy weight, lowering risks of diabetes and glaucoma.",
      color: "from-cyan-400/20 to-blue-300/20",
      border: "border-l-cyan-400",
      accent: "text-cyan-600"
    },
    {
      icon: <CigaretteOff size={32} />,
      title: "Quit Smoking",
      content: "Smoking increases risks of cataracts and optic nerve damage. Quitting helps your eyes heal and prevents further damage.",
      color: "from-rose-400/20 to-red-300/20",
      border: "border-l-rose-400",
      accent: "text-rose-600"
    },
    {
      icon: <Sun size={32} />,
      title: "Wear Sunglasses",
      content: "Protect eyes from UV rays to prevent cataracts. Choose sunglasses that block 99-100% of UVA and UVB radiation.",
      color: "from-amber-400/20 to-yellow-300/20",
      border: "border-l-amber-400",
      accent: "text-amber-600"
    },
    {
      icon: <Glasses size={32} />,
      title: "Use Safety Eyewear",
      content: "Wear protective goggles when working with hazardous materials or playing sports like hockey or racquetball.",
      color: "from-slate-400/20 to-gray-300/20",
      border: "border-l-slate-400",
      accent: "text-slate-600"
    },
    {
      icon: <Monitor size={32} />,
      title: "Protect from Blue Light",
      content: "Reduce eye strain from screens. Follow the 20-20-20 rule, blink often, and ensure proper lighting.",
      color: "from-indigo-400/20 to-purple-300/20",
      border: "border-l-indigo-400",
      accent: "text-indigo-600"
    },
    {
      icon: <Hand size={32} />,
      title: "Good Eye Hygiene",
      content: "Wash hands often, don't share towels, remove makeup before bed, and take proper care of contact lenses.",
      color: "from-teal-400/20 to-emerald-300/20",
      border: "border-l-teal-400",
      accent: "text-teal-600"
    },
    {
      icon: <Eye size={32} />,
      title: "Regular Eye Exams",
      content: "Regular check-ups can spot silent issues like glaucoma early. See an ophthalmologist or optometrist periodically.",
      color: "from-violet-400/20 to-purple-300/20",
      border: "border-l-violet-400",
      accent: "text-violet-600"
    }
  ];

 

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 font-sans text-slate-900 selection:bg-emerald-200/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-200/20 to-emerald-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative z-10">

        <header 
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/40 shadow-sm">
            <Sparkles size={16} className="text-emerald-600" />
            <span className="text-sm font-medium text-slate-700">Eye Care Guide</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Eye Health
            </span>
            <br />
            <span className="text-4xl md:text-5xl font-light text-slate-600 mt-4 block">
              & Vision Care Essentials
            </span>
          </h1>
          
          <p 
            className="text-xl text-slate-600 leading-relaxed bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-sm"
          >
            <span className="text-2xl text-emerald-600 font-semibold">Did you know?</span> 
            {" "}Over 50% of vision impairment can be prevented through simple daily choices 
            that make a lifetime of difference for your optical health.
          </p>
        </header>

        <div 
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${tip.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 ${tip.border} border-t border-white/50 backdrop-blur-sm h-full flex flex-col`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-inner border border-white/40 ${tip.accent}`}>
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 ${tip.accent} leading-tight`}>
                      {index + 1}. {tip.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {tip.content}
                    </p>
                  </div>
                </div>
                
                {/* Interactive Element */}
                <div className="mt-auto pt-4 border-t border-white/30">
                  <div className="flex items-center gap-2 text-sm text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <EyeOff size={14} />
                    <span>Protects against vision loss</span>
                  </div>
                </div>
              </div>
              
              {/* Floating accent */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${tip.border.replace('border-l-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <section 
          className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl rounded-[4rem] p-12 md:p-16 relative overflow-hidden border border-white/30 shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-300/20 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Palette size={24} className="text-emerald-600" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent">
                Vision Care Insights
              </h2>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "What are the worst foods for eye health?",
                  answer: "High glycemic foods like white bread, cakes, and sugary cereals. Try to limit these and choose whole grains instead.",
                  icon: "🍞"
                },
                {
                  question: "How often should I get an eye exam?",
                  answer: "Generally: Once in your 20s, twice in your 30s, and at age 40. After 65, every 1-2 years. More often if you have diabetes or high BP.",
                  icon: "👁️"
                },
                {
                  question: "Best vitamins for eyes?",
                  answer: "Vitamin A, C, E, Copper, Zinc, Lutein, and Zeaxanthin. A healthy diet is usually sufficient!",
                  icon: "💊"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Action */}
        <div
          className="fixed bottom-8 right-8 z-20"
        >
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 group">
            <Eye size={24} />
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-rose-400 rounded-full animate-ping"></div>
          </button>
        </div>
      </main>
    </div>
  );
};