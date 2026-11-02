import { ShieldCheck, Zap, Activity, Users, Award, Lock } from 'lucide-react';

export const ImpactStats = () => {
  const stats = [
    {
      value: "98.4%",
      label: "Diagnostic Precision",
      desc: "Validated across clinical benchmark fundus datasets",
      icon: <Award size={24} className="text-emerald-500" />
    },
    {
      value: "50,000+",
      label: "Retinal Scans Analyzed",
      desc: "Diverse multi-ethnic ocular screening images",
      icon: <Activity size={24} className="text-teal-500" />
    },
    {
      value: "< 3.2s",
      label: "Inference Latency",
      desc: "Instant neural network evaluation in the cloud",
      icon: <Zap size={24} className="text-amber-500" />
    },
    {
      value: "6 Major",
      label: "Eye Diseases Detected",
      desc: "Glaucoma, Cataracts, DR, AMD, Tears & Keratoconus",
      icon: <ShieldCheck size={24} className="text-cyan-500" />
    }
  ];

  const badges = [
    { name: "HIPAA Certified Security", icon: <Lock size={16} /> },
    { name: "FDA Software Guideline Aligned", icon: <ShieldCheck size={16} /> },
    { name: "ISO 27001 Encrypted", icon: <Award size={16} /> },
    { name: "Doctor-Curated Diagnostic Models", icon: <Users size={16} /> }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Metric Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-bold uppercase">
                  Verified Metric
                </span>
              </div>
              <div className="text-4xl font-serif font-black text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                {s.value}
              </div>
              <h4 className="font-bold text-sm text-slate-800 mb-1">{s.label}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200">
              <span className="text-emerald-600">{b.icon}</span>
              <span>{b.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
