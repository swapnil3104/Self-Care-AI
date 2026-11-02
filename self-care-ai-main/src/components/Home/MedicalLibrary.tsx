import { ArrowRight, BookOpen, Stethoscope, Film, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MedicalLibrary = () => {
    const navigate = useNavigate();

    return (
        <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

                {/* Geometric pattern overlay */}
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                {/* Left: Interactive Content */}
                <div className="space-y-8">
                    {/* Animated header with icon */}
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-cyan-500/20 flex items-center gap-2">
                            <Eye size={14} className="text-cyan-400" />
                            Clinical Knowledge Hub
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight font-serif">
                        Medical
                        <span className="block bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                            Library & 3D Video
                        </span>
                    </h2>

                    <p className="text-xl text-blue-100/90 font-light leading-relaxed border-l-4 border-cyan-400 pl-6 py-2">
                        Transform complex ophthalmology into <span className="text-cyan-300 font-semibold">interactive visual knowledge</span>. Explore simulated vision loss, anatomical 3D breakdown, and disease symptoms.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-blue-100/80">
                            <Stethoscope size={20} className="text-cyan-400 flex-shrink-0" />
                            <span className="text-base sm:text-lg">Doctor-curated guides covering Glaucoma, Cataracts, DR, AMD & more</span>
                        </div>
                        <div className="flex items-center gap-4 text-blue-100/80">
                            <Film size={20} className="text-cyan-400 flex-shrink-0" />
                            <span className="text-base sm:text-lg">Interactive Vision Simulator & Clinical 3D Animation Videos</span>
                        </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <button 
                        onClick={() => navigate('/medical-library')}
                        className="group relative bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-600 hover:from-cyan-400 hover:to-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/25 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/40 flex items-center gap-3 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative">Explore Medical Library</span>
                        <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Right: Immersive Visual */}
                <div className="relative">
                    {/* Floating cards container */}
                    <div className="relative h-[560px]">
                        {/* Main card */}
                        <div 
                            onClick={() => navigate('/medical-library/glaucoma')}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-700/50 transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer group"
                        >
                            <div className="absolute inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
                                    alt="Medical Research"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                                />
                            </div>

                            {/* Card content */}
                            <div className="absolute bottom-6 left-6 right-6 bg-slate-800/90 backdrop-blur-xl p-5 rounded-2xl border border-slate-700/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                                        <BookOpen size={18} className="text-cyan-300" />
                                    </div>
                                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Visual Guide</span>
                                </div>
                                <h4 className="text-white font-bold text-base mb-1">Understanding Glaucoma</h4>
                                <p className="text-blue-100/70 text-xs">Optic nerve cupping, aqueous humor dynamics, and treatment</p>
                            </div>
                        </div>

                        {/* Floating secondary card */}
                        <div 
                            onClick={() => navigate('/medical-library/macular-degeneration')}
                            className="absolute top-16 right-4 sm:right-8 w-64 h-36 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-2xl border border-blue-500/30 backdrop-blur-md transform -rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                        >
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                                    <span className="text-xs font-bold text-cyan-300">Live Update</span>
                                </div>
                                <p className="text-white font-semibold text-xs mb-1">Macular Degeneration (AMD)</p>
                                <p className="text-slate-300 text-[11px]">Amsler grid test & anti-VEGF therapy</p>
                            </div>
                        </div>

                        {/* Floating tertiary card */}
                        <div 
                            onClick={() => navigate('/medical-library')}
                            className="absolute bottom-16 left-2 sm:left-4 w-60 h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-xl transform rotate-8 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                        >
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-teal-300">Vision Simulator</span>
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                </div>
                                <p className="text-white text-xs font-medium">Experience tunnel vision, cataracts, and blind spots</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};