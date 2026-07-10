import { ArrowRight, Brain, CheckCircle2, Network } from "lucide-react";

export const AboutAI = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
            <Brain size={14} />
            <span>Core Technology</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-6 leading-tight">
            About Our <span className="italic text-emerald-600">AI Model</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
            Selfcare AI uses a <strong className="font-medium text-slate-900">Convolutional Neural Network (CNN)</strong> model trained on thousands of labeled eye images. Our AI learns to detect subtle patterns and abnormalities in the retina that indicate various diseases — delivering fast, accurate, and reliable results.
          </p>

          <div className="flex items-end gap-4 mb-10">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Model Accuracy</p>
              <div className="text-6xl font-serif font-bold text-slate-900 leading-none">
                98<span className="text-emerald-500 text-4xl">%</span>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200 mx-4"></div>
            <div className="flex flex-col gap-1 pb-1">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Clinically Validated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          <button className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-200">
            <span>Know More</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Visual */}
        <div className="order-1 lg:order-2 relative" >
          {/* Abstract Background Shapes */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
          
          <div className="relative rounded-3xl overflow-hidden border border-white shadow-2xl shadow-slate-200/50 bg-white md:block hidden">
            {/* Main Image */}
            <div className="relative h-[500px] w-full">
               <img 
                 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
                 alt="Doctor analyzing eye scan" 
                 className="w-full h-full object-cover"
               />
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
               
               {/* Floating Tech Card */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                 <div className="flex items-start justify-between mb-4">
                   <div>
                     <p className="text-xs font-mono text-emerald-300 mb-1">ARCHITECTURE</p>
                     <p className="font-bold text-lg">ResNet-50 CNN</p>
                   </div>
                   <Network className="text-emerald-400" />
                 </div>
                 <div className="space-y-2">
                   <div className="flex justify-between text-xs text-slate-300">
                     <span>Training Data</span>
                     <span>50,000+ Images</span>
                   </div>
                   <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                     <div className="h-full w-3/4 bg-emerald-400 rounded-full" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
