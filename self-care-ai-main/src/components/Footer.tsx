import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <div className="bg-white/95 hover:bg-white px-3 py-1.5 rounded-2xl inline-block shadow-md transition-all hover:scale-105">
                <Logo height="h-10" />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              Pioneering deep learning solutions in preventative ophthalmology. Delivering clinical-grade retinal scan analyses and empowering patients with actionable ocular intelligence.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-emerald-400" />
                <span>Pune / Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" />
                <span>National Ophthalmic Helpline: 1800-EYE-CARE</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/medical-library" className="hover:text-emerald-400 transition-colors">Medical Library</Link>
              </li>
              <li>
                <Link to="/eye-anatomy-3d" className="hover:text-emerald-400 transition-colors font-medium text-emerald-300">3D Eye Anatomy Explorer</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-400 transition-colors">Patient Portal Login</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-emerald-400 transition-colors">Create Free Account</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Diagnostic Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Condition Guides */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Disease Guides</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/medical-library/glaucoma" className="hover:text-emerald-400 transition-colors">Glaucoma</Link>
              </li>
              <li>
                <Link to="/medical-library/cataract" className="hover:text-emerald-400 transition-colors">Cataracts</Link>
              </li>
              <li>
                <Link to="/medical-library/diabetic-retinopathy" className="hover:text-emerald-400 transition-colors">Diabetic Retinopathy</Link>
              </li>
              <li>
                <Link to="/medical-library/macular-degeneration" className="hover:text-emerald-400 transition-colors">Macular Degeneration</Link>
              </li>
              <li>
                <Link to="/medical-library/retinal-detachment" className="hover:text-emerald-400 transition-colors">Retinal Detachment</Link>
              </li>
              <li>
                <Link to="/medical-library/keratoconus" className="hover:text-emerald-400 transition-colors">Keratoconus</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get monthly physician-curated ocular health updates and AI breakthroughs.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail size={14} />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Clinical Disclaimer Banner */}
        <div className="py-8 border-b border-slate-800/80 flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-400">
          <ShieldAlert size={20} className="text-amber-400 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong>Medical Disclaimer:</strong> SelfCareAI is an assistive diagnostic screening platform intended for early awareness and educational triage. It does not provide medical prescriptions or replace comprehensive slit-lamp evaluations by a certified ophthalmologist.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} SelfCareAI Vision Guard. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Clinical Use</span>
            <span className="hover:text-slate-300 cursor-pointer">HIPAA Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
