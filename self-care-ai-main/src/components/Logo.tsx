import { ScanEye } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-xl text-white shadow-lg shadow-emerald-200 transition-transform group-hover:scale-105">
      <ScanEye size={24} />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold text-gray-900 leading-none tracking-tight">
        SelfCare<span className="text-emerald-600">AI</span>
      </span>
      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
        Vision Guard
      </span>
    </div>
  </div>
);

export default Logo;
