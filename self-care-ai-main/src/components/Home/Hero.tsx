import { ShieldCheck, ArrowRight } from 'lucide-react';
import PatientReviews from './PatientReviews';
import ImageGallery from './ImageGallery';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-emerald-50">
      {/* Background Curve SVG */}
      <div className="absolute top-0 left-0 w-full h-[120%]  -z-10 rounded-b-[100px] lg:rounded-b-[200px]" style={{ clipPath: 'ellipse(150% 100% at 50% 0%)' }}>
        {/* Subtle texture or noise could go here */}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center ">
        
        {/* Left Content */}
        <div className="text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-emerald-600 font-semibold text-sm mb-6 animate-fade-in-up">
            <ShieldCheck size={16} />
            <span>AI-Powered Healthcare Partner</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-900 tracking-tighter leading-[1.1] mb-8">
            Detect Eye <br />
            Diseases in <span className="text-emerald-500 inline-block relative">
              Seconds
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
              </svg>
            </span>
          </h1>
          
          <p className="text-2xl text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Advanced diagnostics at your fingertips. Our AI analyzes retinal scans with clinical precision to detect early signs of ocular conditions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="flex items-center gap-2 bg-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-400/30 transition-all transform hover:-translate-y-1">
              Get Started Free
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center gap-2 text-gray-600 px-8 py-4 rounded-full font-semibold hover:bg-white hover:shadow-md transition-all">
              View Demo
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
