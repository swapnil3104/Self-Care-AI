import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PatientReviews from './PatientReviews';
import ImageGallery from './ImageGallery';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white">
      {/* Background Curve SVG */}
      <div 
        className="absolute top-0 left-0 w-full h-[120%] -z-10 rounded-b-[100px] lg:rounded-b-[200px]" 
        style={{ clipPath: 'ellipse(150% 100% at 50% 0%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-emerald-700 font-semibold text-xs uppercase tracking-wider mb-6 border border-emerald-100">
            <Sparkles size={14} className="text-emerald-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>AI-Powered Ophthalmology Diagnostics</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-8">
            Detect Eye <br />
            Diseases in <span className="text-emerald-600 inline-block relative">
              Seconds
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-teal-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Clinical-grade retinal intelligence. Our deep learning models analyze fundus scans with 98% accuracy to identify Glaucoma, Diabetic Retinopathy, Cataracts, and Macular Degeneration.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Started Free</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => navigate('/medical-library')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-700 bg-white border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 hover:shadow-md transition-all group"
            >
              <Play size={16} className="text-emerald-600 fill-emerald-600 group-hover:scale-110 transition-transform" />
              <span>Explore Medical Library</span>
            </button>
          </div>

          <PatientReviews />
        </div>

        {/* Right Content */}
        <div className="relative hidden lg:block">
          <ImageGallery />
        </div>
      </div>
      
      {/* Decorative Bottom shape */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2 z-20">
         <div className="w-24 h-12 bg-white rounded-t-full shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex items-center justify-center">
           <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
