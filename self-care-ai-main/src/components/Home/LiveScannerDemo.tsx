import { useState } from 'react';
import { CheckCircle2, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ScanSample {
  id: string;
  name: string;
  type: string;
  image: string;
  conditionDetected: string;
  confidence: number;
  status: 'normal' | 'abnormal' | 'emergency';
  findings: string[];
  recommendation: string;
}

export const LiveScannerDemo = () => {
  const navigate = useNavigate();

  const samples: ScanSample[] = [
    {
      id: 'dr',
      name: 'Patient Scan A',
      type: 'Fundus Retinal Scan',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      conditionDetected: 'Diabetic Retinopathy (Moderate NPDR)',
      confidence: 98.7,
      status: 'abnormal',
      findings: [
        'Multiple microaneurysms detected in nasal quadrant',
        'Scattered dot & blot retinal hemorrhages',
        'Early hard lipid exudate ring near superior macula'
      ],
      recommendation: 'Comprehensive dilated ophthalmology evaluation within 3-4 weeks. Glycemic control review.'
    },
    {
      id: 'glaucoma',
      name: 'Patient Scan B',
      type: 'Optic Disc Biophotometry',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      conditionDetected: 'Glaucoma (POAG Suspect)',
      confidence: 97.4,
      status: 'abnormal',
      findings: [
        'Enlarged Cup-to-Disc ratio (CDR 0.72 vertical)',
        'Inferior retinal nerve fiber layer (RNFL) thinning',
        'Optic disc notch at 6 o-clock position'
      ],
      recommendation: 'Urgent Tonometry (IOP check) and Humphrey Visual Field perimetry testing recommended.'
    },
    {
      id: 'healthy',
      name: 'Patient Scan C',
      type: 'Color Retinal Photography',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      conditionDetected: 'Healthy Retina (No Pathologies)',
      confidence: 99.4,
      status: 'normal',
      findings: [
        'Sharp, healthy optic disc margins with normal 0.3 CDR',
        'Clear, well-defined foveal avascular zone (FAZ)',
        'Intact retinal vasculature with no microaneurysms'
      ],
      recommendation: 'Optimal retinal health. Schedule routine follow-up screening in 12 months.'
    },
    {
      id: 'cataract',
      name: 'Patient Scan D',
      type: 'Anterior Lens Slit-Lamp',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      conditionDetected: 'Nuclear Sclerotic Cataract (Grade 3)',
      confidence: 98.1,
      status: 'abnormal',
      findings: [
        'Central lens crystallin protein opacification',
        'Marked brownish-yellow nuclear discoloration',
        'Refractive light scattering causing diffuse glare'
      ],
      recommendation: 'Surgical consult for Phacoemulsification and Premium IOL implantation.'
    }
  ];

  const [activeSample, setActiveSample] = useState<ScanSample>(samples[0]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(100);

  const triggerScan = (sample: ScanSample) => {
    setActiveSample(sample);
    setIsScanning(true);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden" id="interactive-demo">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#10b9810d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Sparkles size={14} className="animate-spin" style={{ animationDuration: '4s' }} />
            <span>Live Interactive AI Sandbox</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Test Our Deep Learning Model in <span className="text-emerald-400">Real-Time</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            Select any patient scan below to simulate our multi-layered convolutional neural network evaluating vascular patterns, optic cup ratios, and lens opacities.
          </p>
        </div>

        {/* Sample Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {samples.map((sample) => {
            const isSelected = activeSample.id === sample.id;
            return (
              <button
                key={sample.id}
                onClick={() => triggerScan(sample)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-slate-800/90 border-emerald-400 shadow-xl shadow-emerald-500/20 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
                    <img src={sample.image} alt={sample.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors">
                      {sample.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono block truncate">{sample.type}</span>
                  </div>
                </div>
                <div className="text-[11px] font-semibold text-emerald-400 truncate">
                  {sample.conditionDetected.split('(')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Scanner Console */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 lg:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Scan Viewport with Animated Laser (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-700 bg-black shadow-inner group">
                <img
                  src={activeSample.image}
                  alt={activeSample.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isScanning ? 'scale-105 filter brightness-110' : 'scale-100'
                  }`}
                />

                {/* Animated Scanning Laser Line */}
                {isScanning && (
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee] animate-laser pointer-events-none z-30" />
                )}

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffcc08_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc08_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

                {/* HUD Overlay Badges */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isScanning ? 'bg-cyan-400 animate-ping' : 'bg-emerald-400'}`} />
                  <span>{isScanning ? `NEURAL SCANNING • ${scanProgress}%` : 'DIAGNOSTIC COMPLETE'}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-300 font-mono">
                  RESNET-50 INFERENCE: 240MS
                </div>
              </div>

              {/* Action Buttons below scan */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <button
                  onClick={() => triggerScan(activeSample)}
                  disabled={isScanning}
                  className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/25 active:scale-95 disabled:opacity-50"
                >
                  <RefreshCw size={16} className={isScanning ? 'animate-spin' : ''} />
                  <span>{isScanning ? 'Processing Layers...' : 'Re-Run Diagnostic Scan'}</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>HIPAA Encrypted Telemetry</span>
                </div>
              </div>
            </div>

            {/* Right: Real-Time Diagnostic Output (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">AI Classification</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    activeSample.status === 'normal'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                  }`}>
                    {activeSample.status === 'normal' ? 'Normal Acuity' : 'Pathology Flagged'}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {activeSample.conditionDetected}
                </h3>

                {/* Confidence Bar */}
                <div className="space-y-1.5 mb-6">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Model Confidence</span>
                    <span className="text-emerald-400 font-bold">{activeSample.confidence}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-700"
                      style={{ width: `${activeSample.confidence}%` }}
                    />
                  </div>
                </div>

                {/* Key Clinical Findings */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Morphological Markers Detected:
                  </h4>
                  <ul className="space-y-2">
                    {activeSample.findings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clinical Recommendation */}
                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-xs text-slate-300 space-y-1">
                  <strong className="text-emerald-400 block font-semibold">Triage Guidance:</strong>
                  <span>{activeSample.recommendation}</span>
                </div>
              </div>

              {/* Jump to Full Disease Guide */}
              <button
                onClick={() => navigate('/medical-library')}
                className="know-more-button w-full justify-center"
              >
                <span>Read Full Disease Library Guide</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
