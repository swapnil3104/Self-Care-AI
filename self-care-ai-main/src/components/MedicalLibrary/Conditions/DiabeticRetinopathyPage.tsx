import Navbar from "../../NavBar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const DiabeticRetinopathyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/medical-library" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Library
        </Link>

        <header className="mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 text-sm font-bold tracking-wide mb-4">
            RETINAL HEALTH
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Diabetic Retinopathy: <br/>
            <span className="text-emerald-600">Protecting Your Vision from Diabetes</span>
          </h1>
        </header>

        <article className="prose prose-lg prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">What is Diabetic Retinopathy (DR)?</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Diabetic Retinopathy is an eye disease that affects people with Type 1 or Type 2 Diabetes. It is caused by consistently high blood sugar levels, which damage the tiny blood vessels in the retina—the light-sensitive tissue at the back of your eye responsible for sending visual information to your brain.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm my-6">
              <p className="font-medium text-slate-900 mb-2">When these blood vessels are damaged, they can:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span>Swell and leak fluid (Diabetic Macular Edema).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span>Close off, cutting off blood supply (ischemia).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span>Trigger the growth of fragile, abnormal new vessels (Proliferative DR).</span>
                </li>
              </ul>
            </div>
            <p className="font-medium text-red-600">If left unchecked, this damage can lead to permanent vision loss and blindness.</p>
          </section>

          <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
             <div className="order-2 md:order-1">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Anatomy of Damage</h3>
                <p className="text-slate-700">
                    Here is a detailed diagram showing how diabetes damages the anatomy of the eye. The high blood sugar levels weaken the vessel walls, causing them to bulge (microaneurysms) or leak fluid into the retina.
                </p>
             </div>
             <div className="order-1 md:order-2">
                <img 
                  src="https://www.nei.nih.gov/sites/default/files/styles/large_16_9/public/2019-06/diabetic-retinopathy-illustration_0.jpg?itok=J9qXlq5-" 
                  alt="Diabetic Retinopathy Anatomy" 
                  className="w-full rounded-2xl shadow-lg"
                />
                <p className="text-sm text-slate-500 mt-2 text-center italic">Illustration of Diabetic Retinopathy effects</p>
             </div>
          </section>

          <section className="mb-12 bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
            <h2 className="text-2xl font-serif font-bold text-emerald-900 mb-4 flex items-center gap-3">
                <span>🛑</span> Why is Early Detection Critical?
            </h2>
            <p className="text-emerald-800 mb-4">
                Diabetic Retinopathy is often called a "silent disease" because, in the early stages, you usually have <strong>NO symptoms</strong> and your vision may seem perfectly normal. Damage is occurring long before you notice any blurred vision.
            </p>
            <div className="bg-white/60 p-4 rounded-xl">
                <strong className="text-emerald-900 block mb-1">Action is Key:</strong>
                <span className="text-emerald-800">The best chance to prevent permanent vision loss is to detect and treat the condition before symptoms begin. This requires regular, comprehensive dilated eye exams.</span>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Symptoms: What to Watch For</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    "Blurry or Distorted Central Vision",
                    "Floaters (Dark spots or strings)",
                    "Blank or Dark Areas in vision",
                    "Poor Night Vision",
                    "Colors Appearing Faded",
                    "Sudden, Severe Vision Loss"
                ].map((symptom, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">
                            {i + 1}
                        </div>
                        <span className="font-medium text-slate-700">{symptom}</span>
                    </div>
                ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">The Two Main Stages</h2>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">1. Non-Proliferative Diabetic Retinopathy (NPDR)</h3>
                    <p className="text-slate-600 mb-3">The early stage. Existing blood vessels weaken and may leak.</p>
                    <div className="text-sm bg-blue-50 text-blue-800 p-3 rounded-lg">
                        <strong>Key Concern:</strong> Diabetic Macular Edema (DME) - the most common cause of vision loss.
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">2. Proliferative Diabetic Retinopathy (PDR)</h3>
                    <p className="text-slate-600 mb-3">The advanced stage. The retina grows new, fragile blood vessels (neovascularization).</p>
                    <div className="text-sm bg-red-50 text-red-800 p-3 rounded-lg">
                        <strong>The Danger:</strong> These vessels can bleed (vitreous hemorrhage) or cause retinal detachment.
                    </div>
                </div>
            </div>
          </section>

           <section className="mb-12">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Visual Progression Guide</h2>
             <div className="grid md:grid-cols-2 gap-6">
                <img 
                    src="https://media.istockphoto.com/id/1156936523/vector/diabetic-retinopathy.jpg?s=612x612&w=0&k=20&c=wXW-p_eO-JvKkXvXZ-XXX-X-X-X-X-X-X-X-X-X-X-X" 
                    alt="Normal Vision vs Diabetic Retinopathy" 
                    className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
                <img 
                    src="https://www.shutterstock.com/image-vector/diabetic-retinopathy-stages-vector-illustration-260nw-1919926451.jpg" 
                    alt="Stages of Diabetic Retinopathy" 
                    className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
             </div>
           </section>

           <section className="mb-12">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Treatment Options</h2>
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b-2 border-slate-200">
                            <th className="py-4 pr-4 font-bold text-slate-900">Treatment</th>
                            <th className="py-4 pr-4 font-bold text-slate-900">What It Does</th>
                            <th className="py-4 font-bold text-slate-900">Used For</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-700">
                        <tr className="border-b border-slate-100">
                            <td className="py-4 pr-4 font-medium">Diabetes Management</td>
                            <td className="py-4 pr-4">Control blood sugar, BP, cholesterol.</td>
                            <td className="py-4">Essential at ALL stages.</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                            <td className="py-4 pr-4 font-medium">Eye Injections</td>
                            <td className="py-4 pr-4">Block abnormal vessel growth & reduce swelling.</td>
                            <td className="py-4">DME & PDR.</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                            <td className="py-4 pr-4 font-medium">Laser Treatment</td>
                            <td className="py-4 pr-4">Seal leaking vessels or stop growth.</td>
                            <td className="py-4">NPDR & PDR.</td>
                        </tr>
                        <tr>
                            <td className="py-4 pr-4 font-medium">Surgery (Vitrectomy)</td>
                            <td className="py-4 pr-4">Remove vitreous gel, blood, or scar tissue.</td>
                            <td className="py-4">Advanced PDR.</td>
                        </tr>
                    </tbody>
                </table>
             </div>
           </section>

           <section className="mt-16">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">Understanding the Condition</h2>
             <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/X17Q_R5-KKQ" 
                    title="Diabetic Retinopathy Animation" 
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
