import { Activity } from 'lucide-react';

const ImageGallery = () => {
  return (
    <div className="relative h-full min-h-[500px] w-full p-4">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-2 gap-4 h-full relative z-10">
        {/* Main Large Image (Eye Scanning) */}
        <div className="col-span-2 relative h-64 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 group">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" 
            alt="AI Eye Scanning Equipment" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-transparent flex items-center p-8">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-white">
              <Activity className="mb-2" />
              <p className="font-bold text-sm">Retinal Scan Active</p>
              <p className="text-xs opacity-80">Analysis in progress...</p>
            </div>
          </div>
        </div>

        {/* Bottom Left (Close up Eye) */}
        <div className="col-span-1 h-48 rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/10 relative group mt-4">
           <img 
            src="https://images.unsplash.com/photo-1602573991396-fb69ee6d7a0d?auto=format&fit=crop&w=500&q=80" 
            alt="Detailed Eye Examination" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
           {/* Floating Badge */}
           <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-emerald-800 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
             99.8% Precision
           </div>
        </div>

        {/* Bottom Right (Doctor/Tech) */}
        <div className="col-span-1 h-56 -mt-8 rounded-3xl overflow-hidden shadow-xl shadow-emerald-900/10 relative group z-20 border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1456081101716-74e616ab23d8?auto=format&fit=crop&w=500&q=80" 
            alt="Medical Professional Eye Examination" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
