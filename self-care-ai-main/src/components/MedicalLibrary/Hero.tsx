import { ArrowRight, Search, BookOpen, Activity, ShieldCheck } from "lucide-react";

export function MedicalHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden  flex items-center justify-center ">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
                    alt="Medical Professional Background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
                        <BookOpen size={14} />
                        <span>Trusted Resources</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif font-black text-slate-900 tracking-tighter leading-[0.9]">
                        MEDICAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">LIBRARY</span>
                    </h1>

                    <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight">
                        Good information leads to <br />
                        <span className="italic text-emerald-700">better health choices.</span>
                    </p>

                    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl shadow-emerald-900/5 max-w-xl">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            The Medical Library is your trusted source for understanding eye health.
                            Created by doctors and powered by AI-driven insights, it offers easy-to-understand
                            information about common eye conditions, their symptoms, causes, and prevention methods.
                        </p>
                        <div className="mt-6 pt-6 border-t border-slate-200/60 flex flex-col gap-4">
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Whether you're learning about vision problems or checking symptoms,
                                our goal is to help you make informed health decisions.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-slate-900/20 hover:bg-emerald-600 hover:shadow-emerald-500/30 transition-all hover:-translate-y-1 flex items-center gap-2 group">
                            Start Exploring
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search conditions..."
                                className="pl-12 pr-6 py-4 rounded-full bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all w-64"
                            />
                        </div>
                    </div>
                </div>

                {/* Floating Elements / Abstract Visuals on the Right (optional, to balance the layout) */}
                <div className="hidden lg:block relative h-full min-h-[500px]">
                    {/* Decorative Icons matching the theme */}
                    <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl shadow-emerald-900/10 animate-float">
                        <Activity size={32} className="text-emerald-500" />
                    </div>
                    <div className="absolute bottom-20 right-20 bg-white p-4 rounded-2xl shadow-xl shadow-emerald-900/10 animate-float" style={{ animationDelay: '1s' }}>
                        <ShieldCheck size={32} className="text-teal-500" />
                    </div>
                </div>
            </div>
        </section>)
}