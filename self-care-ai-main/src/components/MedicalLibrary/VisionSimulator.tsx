import React, { useState } from 'react';
import { Eye, Info, Sparkles, CheckCircle2 } from 'lucide-react';

export const VisionSimulator: React.FC = () => {
  const [activeCondition, setActiveCondition] = useState<'normal' | 'glaucoma' | 'cataract' | 'dr' | 'amd'>('glaucoma');
  const [severity, setSeverity] = useState<number>(65); // 0 to 100%
  const [activeScene, setActiveScene] = useState<number>(0);

  const scenes = [
    {
      title: "City Street Crossing",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
      description: "Navigating crosswalks and seeing oncoming traffic"
    },
    {
      title: "Reading A Medical Book",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
      description: "Reading fine print, subtitles, and detailed diagrams"
    },
    {
      title: "Nighttime Driving",
      image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80",
      description: "Dealing with glare, dark streets, and headlights"
    }
  ];

  const conditionDetails = {
    normal: {
      name: "Normal Vision (20/20)",
      badge: "Standard",
      description: "Clear sharp central vision with full, unimpaired 180° peripheral field.",
      symptoms: ["Crisp edges and rich color vibrancy", "Full panoramic peripheral vision", "No floaters, glare halos, or blind spots"]
    },
    glaucoma: {
      name: "Glaucoma (Tunnel Vision)",
      badge: "Optic Nerve Loss",
      description: "Peripheral vision constricts gradually while central vision may remain sharp until advanced stages.",
      symptoms: ["Loss of peripheral (side) awareness", "Tripping or missing steps in low light", "Progressive tunnel constriction leading to irreversible blindness"]
    },
    cataract: {
      name: "Cataracts (Clouding & Glare)",
      badge: "Crystalline Lens",
      description: "Light scatter through clumped lens proteins creates hazy, dull vision with severe sensitivity to glare.",
      symptoms: ["Cloudy, foggy, or milky film over entire field", "Halos and starbursts around bright streetlights/headlights", "Faded, yellowish color perception"]
    },
    dr: {
      name: "Diabetic Retinopathy",
      badge: "Retinal Vascular",
      description: "Microvascular leakage and ischemia create patchy dark spots, floaters, and sudden visual distortion.",
      symptoms: ["Dark splotches and floating cobwebs across sight", "Fluctuating vision matching blood glucose spikes", "Blurred central macula with micro-hemorrhages"]
    },
    amd: {
      name: "Macular Degeneration (AMD)",
      badge: "Macula / Central Vision",
      description: "Damage to the central fovea creates a central dark blind spot (scotoma) with wavy, distorted straight lines.",
      symptoms: ["Straight lines appear bent, wavy, or broken (Metamorphopsia)", "Dark grey or black blank spot in the center of focus", "Loss of facial recognition and reading ability"]
    }
  };

  // Compute filter styles based on condition & severity
  const getSimulatedStyle = () => {
    const factor = severity / 100;
    switch (activeCondition) {
      case 'cataract':
        return {
          filter: `blur(${factor * 6}px) brightness(${1 - factor * 0.25}) contrast(${1 - factor * 0.35}) sepia(${factor * 0.25})`,
        };
      case 'normal':
      default:
        return {};
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background grid and orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} className="animate-pulse" />
            <span>Interactive Clinical Simulation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Experience Vision Through Their Eyes
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            See firsthand how common ocular diseases affect daily life. Toggle between conditions and adjust severity to understand the symptoms patients experience before diagnosis.
          </p>
        </div>

        {/* Condition Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(['normal', 'glaucoma', 'cataract', 'dr', 'amd'] as const).map((key) => {
            const isSelected = activeCondition === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCondition(key)}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/25 scale-105'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-emerald-500/40'
                }`}
              >
                <Eye size={16} className={isSelected ? 'text-slate-950' : 'text-emerald-400'} />
                <span>{conditionDetails[key].name}</span>
              </button>
            );
          })}
        </div>

        {/* Simulator Frame */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 lg:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Viewport Canvas (Left 8 cols) */}
            <div className="lg:col-span-8 relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-inner bg-black">
                {/* Scene Image */}
                <img
                  src={scenes[activeScene].image}
                  alt={scenes[activeScene].title}
                  style={getSimulatedStyle()}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Glaucoma Tunnel Overlay */}
                {activeCondition === 'glaucoma' && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-500"
                    style={{
                      background: `radial-gradient(circle at center, transparent ${Math.max(12, 50 - severity * 0.42)}%, rgba(5, 5, 5, 0.94) ${Math.max(22, 70 - severity * 0.35)}%, rgba(2, 2, 2, 0.99) 100%)`
                    }}
                  />
                )}

                {/* Cataract Light Glare Halo */}
                {activeCondition === 'cataract' && severity > 30 && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-500 mix-blend-screen"
                    style={{
                      background: `radial-gradient(circle at 50% 40%, rgba(255,255,240,${(severity / 100) * 0.65}) 0%, transparent 70%)`
                    }}
                  />
                )}

                {/* Diabetic Retinopathy Floaters & Hemorrhages */}
                {activeCondition === 'dr' && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 35% 30%, rgba(20, 20, 20, ${(severity/100)*0.85}) 0%, transparent ${15 + severity * 0.2}%),
                                     radial-gradient(circle at 70% 65%, rgba(139, 0, 0, ${(severity/100)*0.75}) 0%, transparent ${12 + severity * 0.18}%),
                                     radial-gradient(circle at 60% 25%, rgba(15, 15, 15, ${(severity/100)*0.8}) 0%, transparent 18%),
                                     radial-gradient(circle at 25% 75%, rgba(120, 10, 10, ${(severity/100)*0.7}) 0%, transparent 22%)`
                      }}
                    />
                  </div>
                )}

                {/* Macular Degeneration Central Scotoma */}
                {activeCondition === 'amd' && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-500"
                    style={{
                      background: `radial-gradient(circle at center, rgba(15, 15, 15, ${(severity/100)*0.95}) 0%, rgba(25, 25, 25, ${(severity/100)*0.85}) ${severity * 0.25}%, transparent ${severity * 0.45}%)`
                    }}
                  />
                )}

                {/* Live HUD Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>SIMULATED VIEW • {conditionDetails[activeCondition].name}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-300">
                  Scene: {scenes[activeScene].title}
                </div>
              </div>

              {/* Scene Switcher & Severity Slider */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Test Scene:</span>
                  <div className="flex gap-2">
                    {scenes.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScene(idx)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                          activeScene === idx
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {s.title.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {activeCondition !== 'normal' && (
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                      Progression: {severity}%
                    </span>
                    <input
                      type="range"
                      min="15"
                      max="100"
                      value={severity}
                      onChange={(e) => setSeverity(Number(e.target.value))}
                      className="w-40 sm:w-48 accent-emerald-500 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Clinical Insights Panel (Right 4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-3 border border-emerald-500/30">
                  {conditionDetails[activeCondition].badge}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {conditionDetails[activeCondition].name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {conditionDetails[activeCondition].description}
                </p>

                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Recognized Symptoms & Impact
                </h4>
                <ul className="space-y-2.5">
                  {conditionDetails[activeCondition].symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-2xl flex items-start gap-3">
                <Info size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-200/90 leading-relaxed">
                  <strong>Early AI Screening:</strong> Deep learning retinal screening detects structural changes at stage 1, long before noticeable symptoms develop.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
