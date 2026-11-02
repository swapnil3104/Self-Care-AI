import React, { useState } from 'react';
import { Play, Film, Clock, ShieldCheck, CheckCircle2, X } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  thumbnail: string;
  embedUrl: string;
  highlights: string[];
}

export const MedicalVideoShowcase: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: "ai-retinal-scan",
      title: "AI Retinal Scanning & Fundus Image Analysis",
      category: "AI Diagnostics",
      duration: "3:45",
      description: "How modern AI models ingest multi-spectral fundus photos, map retinal micro-vasculature, and flag early signs of microaneurysms and optic nerve thinning.",
      thumbnail: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube-nocookie.com/embed/g2qJ3rYwD3E?autoplay=1",
      highlights: ["Deep learning pattern recognition", "Sub-pixel vascular segmentation", "Comparison against 50,000+ benchmarked fundus scans"]
    },
    {
      id: "glaucoma-3d",
      title: "Glaucoma 3D Animation: Aqueous Humor Drainage",
      category: "Pathophysiology",
      duration: "4:12",
      description: "A 3D medical animation demonstrating how trabecular meshwork blockage increases intraocular pressure (IOP) and compresses optic nerve axons.",
      thumbnail: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube-nocookie.com/embed/4y8N6Q32sC0?autoplay=1",
      highlights: ["Aqueous humor circulation pathway", "Trabecular meshwork & Schlemm's canal", "Optic nerve cupping and visual field loss"]
    },
    {
      id: "cataract-surgery",
      title: "Cataract Formation & Phacoemulsification Surgery",
      category: "Surgical Solutions",
      duration: "5:20",
      description: "Understand the biochemical breakdown of crystallin lens proteins causing cloudiness and the modern ultrasonic technique used to restore 20/20 sight.",
      thumbnail: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube-nocookie.com/embed/nL7Pwb1XwQ0?autoplay=1",
      highlights: ["Protein clumping mechanisms", "Ultrasonic phacoemulsification probe", "Foldable Intraocular Lens (IOL) implantation"]
    },
    {
      id: "diabetic-retina",
      title: "Diabetic Retinopathy & Laser Photocoagulation",
      category: "Retinal Science",
      duration: "4:40",
      description: "Discover how prolonged hyperglycemia weakens capillary pericytes, producing retinal exudates, ischemia, and neovascularization.",
      thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube-nocookie.com/embed/8v_Y3R67lEw?autoplay=1",
      highlights: ["Non-proliferative (NPDR) vs Proliferative (PDR)", "Macular edema fluid leakage", "Anti-VEGF injections and focal laser stabilization"]
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
              <Film size={14} />
              <span>Medical Animation & Video Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Visual Learning & <span className="text-emerald-400">Clinical Videos</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-base font-light">
            Watch physician-reviewed 3D animated explanations and video breakdowns of ocular structures, disease progression, and surgical interventions.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              className="group bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-950/50 cursor-pointer flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Play size={20} className="fill-slate-950 ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-mono text-white flex items-center gap-1">
                  <Clock size={12} />
                  <span>{vid.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-sm border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold text-emerald-300 uppercase">
                  {vid.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-white text-lg mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {vid.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-emerald-400 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} /> Medical Grade
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">Watch Video &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal Player */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white truncate max-w-md md:max-w-xl">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Details in Modal */}
              <div className="p-6 bg-slate-950/80">
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {selectedVideo.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Key Clinical Takeaways:
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {selectedVideo.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
