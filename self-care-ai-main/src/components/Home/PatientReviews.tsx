const PatientReviews = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  ];

  return (
    <div className="mt-12 relative group">
      <p className="text-sm font-bold text-emerald-800 mb-3 ml-1 tracking-wide uppercase opacity-80">
        Trusted by 10k+ Patients
      </p>
      
      <div className="flex items-center gap-6">
        <div className="flex -space-x-4">
          {avatars.map((src, i) => (
            <div key={i} className="relative transition-transform hover:-translate-y-1 duration-300">
              <img 
                src={src} 
                alt="Patient" 
                className="w-12 h-12 rounded-full border-4 border-emerald-50 object-cover shadow-md"
              />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-4 border-emerald-50 bg-white flex items-center justify-center text-xs font-bold text-emerald-600 shadow-md">
            +2k
          </div>
        </div>

        {/* Hand-drawn style arrow SVG */}
        <div className="hidden sm:block text-emerald-800/40 relative top-4">
           <svg width="60" height="40" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 C 30 50, 70 50, 90 20" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
            <path d="M85 15 L 90 20 L 95 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PatientReviews;
