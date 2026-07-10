import { ArrowRight, BookOpen, Stethoscope, Brain } from "lucide-react";

export const MedicalLibrary = () => {
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
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-sm font-bold text-cyan-300 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-cyan-500/20">
                            Knowledge Hub
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Medical
                        <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                            Library
                        </span>
                    </h2>

                    <p className="text-xl text-blue-100/90 font-light leading-relaxed border-l-4 border-cyan-400 pl-6 py-2">
                        Transform complex medical information into <span className="text-cyan-300 font-semibold">actionable knowledge</span> for better health decisions.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-blue-100/80">
                            <Stethoscope size={20} className="text-cyan-400 flex-shrink-0" />
                            <span className="text-lg">Doctor-curated content with latest research</span>
                        </div>
                        <div className="flex items-center gap-4 text-blue-100/80">
                            <Brain size={20} className="text-cyan-400 flex-shrink-0" />
                            <span className="text-lg">Visual guides and interactive symptom checkers</span>
                        </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/25 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/40 flex items-center gap-3 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative">Explore Resources</span>
                        <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Right: Immersive Visual */}
                <div className="relative">
                    {/* Floating cards container */}
                    <div className="relative h-[600px]">
                        {/* Main card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-700/50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
                                    alt="Medical Research"
                                    className="w-full h-full object-cover mix-blend-overlay opacity-60"
                                />
                            </div>

                            {/* Card content */}
                            <div className="absolute bottom-6 left-6 right-6 bg-slate-800/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 hover:z-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                                        <BookOpen size={20} className="text-cyan-300" />
                                    </div>
                                    <span className="text-sm font-bold text-cyan-300">Visual Guide</span>
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">Understanding Glaucoma</h4>
                                <p className="text-blue-100/70 text-sm">Interactive 3D model showing progression and treatment options</p>
                            </div>
                        </div>

                        {/* Floating secondary card */}
                        <div className="absolute top-20 right-8 w-64 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm transform -rotate-6 hover:rotate-0 transition-transform duration-500 delay-75">
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                    <span className="text-xs font-bold text-cyan-300">Live Update</span>
                                </div>
                                <p className="text-white font-semibold text-sm">New research on macular degeneration</p>
                            </div>
                        </div>

                        {/* Floating tertiary card */}
                        <div className="absolute bottom-20 left-4 w-56 h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500 delay-150">
                            <div className="p-3">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-blue-300">Symptom Checker</span>
                                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                                </div>
                                <p className="text-white text-sm font-medium">Interactive diagnostic tool</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};
                        