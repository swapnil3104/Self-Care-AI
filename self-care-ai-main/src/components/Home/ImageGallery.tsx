import { Activity, ShieldCheck, Zap } from 'lucide-react';

const ImageGallery = () => {
  return (
    <div className="relative h-full min-h-[520px] w-full p-4">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-200/40 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-2 gap-4 h-full relative z-10">
        
        {/* Main Large Image (Eye Scanning with Laser Animation) */}
        <div className="col-span-2 relative h-72 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/15 group border-2 border-white/80">
          <img 
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80" 
            alt="AI Retinal Scanning Examination" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Animated Laser Scanning Line */}
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] animate-laser pointer-events-none z-20" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent flex flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <div className="bg-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-400/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>AI RETINAL SCAN • ACTIVE</span>
              </div>
              <div className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
                ResNet-50 v2
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white max-w-xs animate-float-slow">
              <div className="flex items-center gap-2 mb-1">
                <Activity size={18} className="text-emerald-400" />
                <p className="font-bold text-sm">Deep Neurological Mapping</p>
              </div>
              <p className="text-xs text-slate-300">50+ vascular markers evaluated simultaneously</p>
              <div className="mt-2 w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[99.4%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left (Detailed Eye Macro) */}
        <div className="col-span-1 h-52 rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/10 relative group border-2 border-white">
          <img 
            src="https://images.unsplash.com/photo-1602573991396-fb69ee6d7a0d?auto=format&fit=crop&w=600&q=80" 
            alt="Detailed Ocular Examination" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          
          {/* Floating Diagnostic Precision Badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-emerald-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1 border border-emerald-200">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>99.8% Precision</span>
          </div>
        </div>

        {/* Bottom Right (Clinical Specialist) */}
        <div className="col-span-1 h-56 -mt-4 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/15 relative group z-20 border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" 
            alt="Ophthalmology Specialist" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors" />

          {/* Floating AI Speed Badge */}
          <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1 border border-white/20">
            <Zap size={14} className="text-cyan-400" />
            <span>&lt; 5s Analysis</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageGallery;
