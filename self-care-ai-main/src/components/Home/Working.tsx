import { BrainCircuit, UploadCloud, ScanEye, Activity, CheckCircle2 } from "lucide-react";
import { StickyScroll } from "../_ui/StickyScroll";

export const HowItWorks = () => {
  const content = [
    {
      title: "1. Upload Scan",
      description:
        "Securely log in and upload your high-resolution retina or eye images in seconds. Our HIPAA-compliant platform ensures your data stays private and secure throughout the process.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 p-8 relative overflow-hidden group">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 w-full max-w-xs bg-white rounded-xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100 transition-transform duration-500 group-hover:scale-105">
            <div className="flex items-center justify-between mb-6 border-b border-slate-50 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-mono text-slate-400">upload_scan.jpg</span>
            </div>
            
            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-emerald-100 rounded-lg bg-emerald-50/30 group-hover:bg-emerald-50/50 transition-colors">
              <div className="p-4 bg-emerald-100 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <UploadCloud size={32} className="text-emerald-600" />
              </div>
              <p className="text-sm font-medium text-emerald-900">Drag & Drop</p>
              <p className="text-xs text-emerald-600/70 mt-1">or browse files</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2. AI Analysis",
      description:
        "Our trained deep learning models immediately scan for over 50+ signs of diseases, including Diabetic Retinopathy and Glaucoma, identifying micro-patterns invisible to the naked eye.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
           {/* Image Background */}
           <div className="absolute inset-0 opacity-40">
             <img 
               src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80" 
               alt="Retina Scan" 
               className="w-full h-full object-cover grayscale mix-blend-luminosity"
             />
           </div>
           
           {/* Scanning Overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent animate-scan z-10" />
           
           {/* Analysis UI */}
           <div className="relative z-20 w-full max-w-xs">
             <div className="flex items-center justify-between mb-2">
               <span className="text-xs font-mono text-emerald-400 animate-pulse">ANALYZING...</span>
               <span className="text-xs font-mono text-emerald-400">98%</span>
             </div>
             <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden mb-6">
               <div className="h-full bg-emerald-500 w-[98%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
             </div>
             
             <div className="grid grid-cols-2 gap-3">
               <div className="bg-black/50 backdrop-blur-md border border-emerald-500/30 p-3 rounded-lg">
                 <ScanEye size={20} className="text-emerald-400 mb-2" />
                 <p className="text-[10px] text-slate-400 uppercase tracking-wider">Pattern</p>
                 <p className="text-sm font-bold text-white">Detected</p>
               </div>
               <div className="bg-black/50 backdrop-blur-md border border-emerald-500/30 p-3 rounded-lg">
                 <BrainCircuit size={20} className="text-emerald-400 mb-2" />
                 <p className="text-[10px] text-slate-400 uppercase tracking-wider">Model</p>
                 <p className="text-sm font-bold text-white">ResNet-50</p>
               </div>
             </div>
           </div>
        </div>
      ),
    },
    {
      title: "3. Instant Report",
      description:
        "Receive a comprehensive diagnosis with actionable next-step recommendations generated instantly. Download detailed PDFs to share with your healthcare provider.",
      content: (
        <div className="h-full w-full flex items-center justify-center bg-emerald-50 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10" />
          
          <div className="relative z-10 w-full max-w-xs bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-emerald-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <Activity size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Diagnosis Report</h4>
                <p className="text-xs text-slate-500">Generated just now</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs font-medium text-slate-600">Risk Assessment</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">Low Risk</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Macular Health</span>
                  <span className="text-slate-900 font-medium">98/100</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[98%] rounded-full" />
                </div>
              </div>
              
               <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Optic Nerve</span>
                  <span className="text-slate-900 font-medium">95/100</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 w-[95%] rounded-full" />
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-slate-900 text-white text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
              <CheckCircle2 size={14} />
              Download Full Report
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
       {/* Subtle background pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

       <div className="mx-auto px-6 relative z-10">
         {/* Section Header */}
         <div className="text-center mb-24">
            <span className="inline-block py-1 px-3 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-bold text-[10px] tracking-widest uppercase mb-6 shadow-sm">
              Simple Process
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-6 tracking-tight">
              From Scan to <span className="italic text-emerald-600">Diagnosis</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Three simple steps to comprehensive eye health insights. Powered by advanced AI, delivered with clinical precision.
            </p>
         </div>

         {/* Sticky Scroll Component */}
         <StickyScroll content={content} />
       </div>
    </section>
  );
};