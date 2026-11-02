import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, AlertCircle, Activity } from "lucide-react";

interface Condition {
  id: string;
  title: string;
  category: "retinal" | "lens-nerve" | "cornea";
  categoryLabel: string;
  severity: "Emergency" | "Chronic Progressive" | "Gradual";
  prevalence: string;
  description: string;
  symptoms: string[];
  image: string;
  link: string;
}

export const ConditionCards = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const conditions: Condition[] = [
    {
      id: "glaucoma",
      title: "Glaucoma",
      category: "lens-nerve",
      categoryLabel: "Optic Nerve",
      severity: "Chronic Progressive",
      prevalence: "~80 Million Globally",
      description: "Often called the 'silent thief of sight', glaucoma damages the optic nerve through elevated intraocular pressure, gradually stealing peripheral vision without early pain or warning.",
      symptoms: ["Tunnel vision", "Loss of peripheral sight", "Halos around lights", "Optic nerve cupping"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      link: "/medical-library/glaucoma"
    },
    {
      id: "cataract",
      title: "Cataract",
      category: "lens-nerve",
      categoryLabel: "Crystalline Lens",
      severity: "Gradual",
      prevalence: "Leading cause of blindness worldwide",
      description: "Clouding of the eye's natural crystalline lens due to protein cross-linking and clumping, making everyday vision feel like peering through a fogged-up or frosted windshield.",
      symptoms: ["Cloudy or foggy sight", "Severe night glare & halos", "Fading yellowed colors", "Double vision in one eye"],
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      link: "/medical-library/cataract"
    },
    {
      id: "diabetic-retinopathy",
      title: "Diabetic Retinopathy",
      category: "retinal",
      categoryLabel: "Retinal Vascular",
      severity: "Chronic Progressive",
      prevalence: "1 in 3 diabetic adults",
      description: "Persistent high blood sugar weakens retinal microvasculature, leading to microaneurysms, hemorrhages, macular edema, and fragile abnormal vessel proliferation.",
      symptoms: ["Floating dark spots & cobwebs", "Fluctuating vision clarity", "Blurred central vision", "Retinal hemorrhages"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      link: "/medical-library/diabetic-retinopathy"
    },
    {
      id: "macular-degeneration",
      title: "Age-Related Macular Degeneration (AMD)",
      category: "retinal",
      categoryLabel: "Central Retina",
      severity: "Chronic Progressive",
      prevalence: "~20 Million in US / EU",
      description: "Deterioration of the central macula caused by drusen protein deposits (Dry AMD) or abnormal leaking choroidal neovascular vessels (Wet AMD), causing a central blind void.",
      symptoms: ["Straight lines appear wavy (Metamorphopsia)", "Dark grey blind spot in center of focus", "Trouble recognizing faces", "Needs very bright reading light"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      link: "/medical-library/macular-degeneration"
    },
    {
      id: "retinal-detachment",
      title: "Retinal Detachment",
      category: "retinal",
      categoryLabel: "Vitreoretinal",
      severity: "Emergency",
      prevalence: "1 in 10,000 per year",
      description: "A sudden ocular emergency where the neural retina peels away from the underlying supportive choroid tissue, cutting off critical blood supply and oxygen.",
      symptoms: ["Sudden flashes of light (Photopsia)", "Sudden shower of black floaters", "Dark curtain shadow falling across sight", "Rapid vision loss"],
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      link: "/medical-library/retinal-detachment"
    },
    {
      id: "keratoconus",
      title: "Keratoconus",
      category: "cornea",
      categoryLabel: "Cornea & Surface",
      severity: "Gradual",
      prevalence: "1 in 375 people",
      description: "Progressive thinning and weakening of corneal collagen fibers that causes the front of the eye to bulge into an irregular cone, resulting in severe astigmatism and ghosting.",
      symptoms: ["Ghost images & multiple shadows", "Rapid changes in astigmatism", "Severe sensitivity to light and glare", "Difficulty wearing regular contacts"],
      image: "https://images.unsplash.com/photo-1602573991396-fb69ee6d7a0d?auto=format&fit=crop&w=800&q=80",
      link: "/medical-library/keratoconus"
    }
  ];

  const filteredConditions = conditions.filter((c) => {
    const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
    const matchesQuery =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.symptoms.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-24 bg-emerald-50/40 relative" id="conditions-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
            <Activity size={14} />
            <span>Diagnostic Directory</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Comprehensive Eye Diseases Library
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Detailed clinical guides, risk factors, and modern AI detection methods for major ocular pathologies.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 rounded-3xl border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: `All Conditions (${conditions.length})` },
              { id: "retinal", label: "Retinal Diseases" },
              { id: "lens-nerve", label: "Lens & Optic Nerve" },
              { id: "cornea", label: "Cornea & Surface" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search symptoms or disease..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
          </div>
        </div>

        {/* Condition Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConditions.map((condition) => (
            <div
              key={condition.id}
              className="bg-white rounded-[2rem] border-2 border-slate-900 p-6 flex flex-col justify-between h-full shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-52 mb-6 rounded-2xl overflow-hidden border-2 border-slate-900 bg-slate-100">
                  <img
                    src={condition.image}
                    alt={condition.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 border border-slate-200 shadow-sm uppercase tracking-wider">
                    {condition.categoryLabel}
                  </div>

                  {/* Severity Badge */}
                  <div
                    className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                      condition.severity === "Emergency"
                        ? "bg-rose-500/90 text-white animate-pulse"
                        : condition.severity === "Chronic Progressive"
                        ? "bg-amber-400/90 text-slate-950"
                        : "bg-emerald-400/90 text-slate-950"
                    }`}
                  >
                    {condition.severity}
                  </div>
                </div>

                {/* Card Title & Prevalence */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {condition.title}
                  </h3>
                </div>

                <div className="text-[11px] font-mono text-emerald-800 font-semibold mb-3">
                  Prevalence: {condition.prevalence}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-5">
                  {condition.description}
                </p>

                {/* Symptom Tags */}
                <div className="mb-6 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Recognized Indicators:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {condition.symptoms.slice(0, 3).map((sym, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md border border-slate-200"
                      >
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Know More Button with Signature Eye Blinking Effect */}
              <button
                onClick={() => navigate(condition.link)}
                className="know-more-button w-full justify-center"
              >
                <span>Know more..</span>
              </button>
            </div>
          ))}
        </div>

        {filteredConditions.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-slate-900">
            <AlertCircle size={40} className="mx-auto text-slate-400 mb-3" />
            <h4 className="font-bold text-lg text-slate-800">No diseases match your search</h4>
            <p className="text-xs text-slate-500 mt-1">Try searching for "retina", "cloudy", "pressure", or reset filters.</p>
            <button
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
