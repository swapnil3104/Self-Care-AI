import Navbar from "../../NavBar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const CataractPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/medical-library" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Library
        </Link>

        <header className="mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-bold tracking-wide mb-4">
            LENS HEALTH
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Cataract: <br/>
            <span className="text-emerald-600">Restoring Clarity to Your Vision</span>
          </h1>
        </header>

        <article className="prose prose-lg prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">What is a Cataract?</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              A cataract is the clouding of the eye's natural lens, which sits behind the iris and the pupil. This lens works much like a camera lens, focusing light onto the retina for clear vision. When a cataract forms, it's like looking through a frosty or fogged-up window.
            </p>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 my-6">
                <p className="text-amber-900 font-medium">
                    Most cataracts develop slowly and don't disturb your eyesight early on. But with time, cataracts will eventually interfere with your vision.
                </p>
            </div>
          </section>

          <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
             <div className="order-2 md:order-1">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">How It Happens</h3>
                <p className="text-slate-700 mb-4">
                    The lens is mostly made of water and protein. As we age, some of the protein may clump together and start to cloud a small area of the lens. This is a cataract. Over time, it may grow larger and cloud more of the lens, making it harder to see.
                </p>
             </div>
             <div className="order-1 md:order-2">
                <img 
                  src="https://www.nei.nih.gov/sites/default/files/styles/large_16_9/public/2019-06/cataract-illustration_0.jpg?itok=J9qXlq5-" 
                  alt="Cataract Anatomy" 
                  className="w-full rounded-2xl shadow-lg"
                />
             </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Common Symptoms</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    "Clouded, blurred or dim vision",
                    "Increasing difficulty with vision at night",
                    "Sensitivity to light and glare",
                    "Need for brighter light for reading",
                    "Seeing 'halos' around lights",
                    "Frequent changes in eyeglass prescription",
                    "Fading or yellowing of colors",
                    "Double vision in a single eye"
                ].map((symptom, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                        <span className="font-medium text-slate-700">{symptom}</span>
                    </div>
                ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Treatment</h2>
            <p className="text-lg text-slate-700 mb-6">
                When prescription glasses can no longer clear your vision, the only effective treatment for cataracts is surgery.
            </p>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cataract Surgery</h3>
                <p className="text-slate-600 mb-6">
                    Cataract surgery involves removing the clouded lens and replacing it with a clear artificial lens called an intraocular lens (IOL). It is one of the most common, safe, and effective surgical procedures performed today.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <span className="block text-3xl mb-2">⏱️</span>
                        <span className="text-sm font-bold text-slate-700">Quick Procedure</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <span className="block text-3xl mb-2">🏠</span>
                        <span className="text-sm font-bold text-slate-700">Outpatient</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <span className="block text-3xl mb-2">👁️</span>
                        <span className="text-sm font-bold text-slate-700">Clear Vision</span>
                    </div>
                </div>
            </div>
          </section>

           <section className="mt-16">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">Animation: Understanding Cataracts</h2>
             <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/BXEfJNdXlYM" 
                    title="Cataract Animation" 
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
