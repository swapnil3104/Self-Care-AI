
import { ScanEye } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl translate-y-1/2" />
      </div>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 mb-8 relative z-10 group">
        <div className="p-2 bg-emerald-500 rounded-xl text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
          <ScanEye size={28} />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">
            SelfCare<span className="text-emerald-500">AI</span>
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            AI-Powered Disease Detection
          </span>
        </div>
      </Link>

      {/* Main Container */}
      <div className="w-full max-w-6xl grid lg:grid-cols-3 gap-8 items-center relative z-10">
        
        {/* Left Illustration */}
        <div className="hidden lg:block relative">
           <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
             <div className="absolute inset-0 bg-emerald-200 rounded-full blur-2xl opacity-20" />
             <img 
               src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" 
               alt="Medical Professional" 
               className="w-full h-auto rounded-3xl shadow-2xl shadow-emerald-900/10 border-4 border-white mask-image-gradient"
             />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-emerald-50 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                 98%
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-900">Accuracy</p>
                 <p className="text-[10px] text-slate-500">Clinically Tested</p>
               </div>
             </div>
           </div>
        </div>

        {/* Center Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 w-full max-w-lg mx-auto relative">
          <div className="text-center mb-8">
            <p className="text-slate-500 text-sm mb-2">{subtitle}</p>
            <h1 className="text-3xl font-serif font-bold text-slate-900">{title}</h1>
          </div>
          {children}
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:block relative">
           <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 delay-100">
             <div className="absolute inset-0 bg-teal-200 rounded-full blur-2xl opacity-20" />
             <img 
               src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" 
               alt="Eye Examination" 
               className="w-full h-auto rounded-3xl shadow-2xl shadow-teal-900/10 border-4 border-white"
             />
              {/* Floating Badge */}
             <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-teal-50 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                 <ScanEye size={20} />
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-900">AI Analysis</p>
                 <p className="text-[10px] text-slate-500">Instant Results</p>
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};
