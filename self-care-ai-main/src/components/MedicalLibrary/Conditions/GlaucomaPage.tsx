import Navbar from "../../NavBar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const GlaucomaPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/medical-library" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Library
        </Link>

        <header className="mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide mb-4">
            OPTIC NERVE HEALTH
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Glaucoma: <br/>
            <span className="text-emerald-600">The Silent Thief of Sight</span>
          </h1>
        </header>

        <article className="prose prose-lg prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">What is Glaucoma?</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Glaucoma is a group of eye diseases that damage the optic nerve, which is the critical cable connecting your eye to your brain. This damage typically occurs when the fluid inside your eye (aqueous humor) doesn't drain properly, leading to a harmful buildup of intraocular pressure (IOP).
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2">The Problem</h3>
                    <p className="text-slate-600">High pressure compresses and damages the delicate fibers of the optic nerve.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2">The Result</h3>
                    <p className="text-slate-600">Blind spots, usually starting in the peripheral (side) vision. Vision loss is permanent.</p>
                </div>
            </div>
          </section>

          <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
             <div className="order-2 md:order-1">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Pressure & Damage</h3>
                <p className="text-slate-700">
                    Here is a diagram illustrating how increased pressure causes damage to the optic nerve. The blockage in the drainage angle causes fluid to build up, increasing pressure that pushes against the optic nerve.
                </p>
             </div>
             <div className="order-1 md:order-2">
                <img 
                  src="https://www.nei.nih.gov/sites/default/files/styles/large_16_9/public/2019-06/glaucoma-illustration_0.jpg?itok=J9qXlq5-" 
                  alt="Glaucoma Anatomy Diagram" 
                  className="w-full rounded-2xl shadow-lg"
                />
             </div>
          </section>

          <section className="mb-12 bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                    <span>🛑</span> Why "The Silent Thief"?
                </h2>
                <p className="text-slate-300 mb-4 text-lg">
                    The most common form, Primary Open-Angle Glaucoma (POAG), develops very slowly and causes <strong>NO PAIN or NOTICEABLE SYMPTOMS</strong> in the early stages.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <strong className="block text-emerald-400 mb-1">Initial Loss</strong>
                        <span className="text-sm text-slate-300">Steals peripheral vision first. Often unnoticed until significant damage occurs.</span>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <strong className="block text-emerald-400 mb-1">Late Stage</strong>
                        <span className="text-sm text-slate-300">Field of vision narrows until only "tunnel vision" remains.</span>
                    </div>
                </div>
            </div>
            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Visualizing Vision Loss</h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <img 
                    src="https://www.nei.nih.gov/sites/default/files/styles/large_16_9/public/2019-06/glaucoma-vision-simulation_0.jpg?itok=J9qXlq5-" 
                    alt="Normal Vision vs Glaucoma Vision" 
                    className="w-full rounded-2xl shadow-lg"
                />
                <div>
                    <h3 className="font-bold text-lg mb-2">Tunnel Vision Effect</h3>
                    <p className="text-slate-600">
                        As glaucoma progresses, the peripheral vision is lost, leaving only a central tunnel of sight. This progression is often irreversible.
                    </p>
                </div>
            </div>
          </section>

          <section className="mb-12">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Types of Glaucoma</h2>
             <div className="space-y-4">
                <div className="p-5 border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors">
                    <h3 className="font-bold text-lg text-emerald-800">Primary Open-Angle Glaucoma (POAG)</h3>
                    <p className="text-slate-600 text-sm mt-1">Drainage angle is open but clogged. Pressure builds slowly. Most common type.</p>
                </div>
                <div className="p-5 border-l-4 border-red-500 bg-red-50 rounded-r-xl">
                    <h3 className="font-bold text-lg text-red-800 flex items-center gap-2">
                        Acute Angle-Closure Glaucoma
                        <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full">EMERGENCY</span>
                    </h3>
                    <p className="text-red-900/80 text-sm mt-1">Drainage angle blocked suddenly. Rapid pressure rise. Severe pain, nausea, halos.</p>
                </div>
             </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Treatment Options</h2>
            <p className="mb-6 text-slate-600">The goal is to lower intraocular pressure (IOP) to prevent further damage.</p>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                        <span className="text-2xl">💧</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Eye Drops</h3>
                    <p className="text-sm text-slate-600">Decrease fluid production or improve drainage. Common initial treatment.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                        <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Laser Treatment</h3>
                    <p className="text-sm text-slate-600">SLT or ALT to help drainage angle work better. Often used with drops.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                        <span className="text-2xl">🔪</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Surgery</h3>
                    <p className="text-sm text-slate-600">Trabeculectomy or MIGS to create new drainage channels.</p>
                </div>
            </div>
          </section>

           <section className="mt-16">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">Watch: Understanding Glaucoma</h2>
             <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/9Q3Q3Q3Q3Q3" 
                    title="Glaucoma Animation" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
             </div>
           </section>

        </article>
      </main>
    </div>
  );
};
