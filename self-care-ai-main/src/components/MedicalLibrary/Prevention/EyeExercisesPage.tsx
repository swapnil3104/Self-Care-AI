import { useState, useEffect } from "react";
import Navbar from "../../NavBar";
import { Eye, RefreshCw, MoveHorizontal, Maximize, Infinity as InfinityIcon, Clock, Target, Layers, ArrowLeft, Play, Pause, RotateCcw, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const EyeExercisesPage = () => {
  const navigate = useNavigate();

  // 20-20-20 Rule Interactive Timer
  const [secondsLeft, setSecondsLeft] = useState<number>(20);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [completedReps, setCompletedReps] = useState<number>(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsTimerRunning(false);
      setCompletedReps((prev) => prev + 1);
      setSecondsLeft(20);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, secondsLeft]);

  const exercises = [
    {
      title: "1. Conscious Blinking Cycle",
      desc: "Close both eyes gently for 2 seconds, squeeze your lids lightly together, then open. Repeat 10 times. Stimulates meibomian lipid release to coat and restore the tear film.",
      duration: "1 Minute",
      icon: <RefreshCw size={26} />,
      color: "bg-blue-100 text-blue-700",
      benefit: "Prevents evaporative dry eye & digital eye strain"
    },
    {
      title: "2. The 20-20-20 Reset",
      desc: "Every 20 minutes of digital screen time, shift your gaze to an object at least 20 feet away for 20 continuous seconds. Fully relaxes ciliary muscle spasms.",
      duration: "20 Seconds",
      icon: <Clock size={26} />,
      color: "bg-cyan-100 text-cyan-700",
      benefit: "Halts progressive accommodative fatigue"
    },
    {
      title: "3. Pencil Push-Ups (Vergence Training)",
      desc: "Hold a pencil at arm's length at eye level. Slowly bring the pencil tip toward your nose while maintaining a single clear image. When it doubles, pull back.",
      duration: "2 Minutes",
      icon: <MoveHorizontal size={26} />,
      color: "bg-emerald-100 text-emerald-700",
      benefit: "Strengthens medial rectus & convergence insufficiency"
    },
    {
      title: "4. Near-Far Dynamic Accommodation",
      desc: "Hold your thumb 10 inches from your face. Focus on your thumb print for 15 seconds. Then switch focus to a distant object 20+ feet away for 15 seconds.",
      duration: "1.5 Minutes",
      icon: <Maximize size={26} />,
      color: "bg-purple-100 text-purple-700",
      benefit: "Maintains flexibility of the crystalline lens"
    },
    {
      title: "5. Visual Figure-8 (Saccades & Smooth Pursuit)",
      desc: "Imagine a giant figure 8 on the floor 10 feet in front of you. Smoothly trace the outline with your gaze for 30 seconds clockwise, then reverse counter-clockwise.",
      duration: "1 Minute",
      icon: <InfinityIcon size={26} />,
      color: "bg-rose-100 text-rose-700",
      benefit: "Coordinates all 6 extraocular recti and oblique muscles"
    },
    {
      title: "6. Thermal Palming",
      desc: "Rub your palms together vigorously until warm. Cup your hollowed palms gently over closed eyes without pressing the eyeballs. Inhale deeply in pitch black darkness.",
      duration: "3 Minutes",
      icon: <Eye size={26} />,
      color: "bg-amber-100 text-amber-700",
      benefit: "Soothes optic nerve fatigue & stimulates parasympathetic relaxation"
    },
    {
      title: "7. Brock String Alignment",
      desc: "A classic orthoptic therapy tool using a string with colored beads spaced along it to train binocular coordination and depth stereopsis perception.",
      duration: "2 Minutes",
      icon: <Layers size={26} />,
      color: "bg-indigo-100 text-indigo-700",
      benefit: "Eliminates visual suppression & misalignments"
    },
    {
      title: "8. The Barrel Card Technique",
      desc: "Hold a card printed with graduating colored circles aligned against your nose. Alternately fuse the red and green circles until they form a single fused image.",
      duration: "1 Minute",
      icon: <Target size={26} />,
      color: "bg-orange-100 text-orange-700",
      benefit: "Trains sensory motor fusion and stereo-acuity"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/medical-library" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Medical Library
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-wide uppercase mb-4">
            <Eye size={14} />
            ORTHOPTICS & VISION THERAPY
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            8 Clinically Proven <br />
            <span className="text-emerald-600">Eye Exercises & Therapy Techniques</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            While exercises cannot alter anatomical corneal curvature (myopia/astigmatism), scientific studies prove they dramatically alleviate Digital Eye Strain (Asthenopia), strengthen extraocular muscle coordination, and restore tear film lubrication.
          </p>
        </header>

        {/* Interactive 20-20-20 Live Timer Card */}
        <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 rounded-3xl mb-14 shadow-xl border border-indigo-900/50">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider inline-block border border-emerald-500/30">
                Interactive Exercise Tool
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">Live 20-20-20 Vision Break Timer</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Look away from your screen right now at an object 20 feet away (or out the window). Hit start and maintain your gaze into the distance until the timer rings.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1 font-mono">
                <CheckCircle2 size={16} />
                <span>Reps completed this session: {completedReps}</span>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-5xl font-mono font-bold text-emerald-400 mb-4 tracking-wider">
                00:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isTimerRunning ? "Pause" : "Start 20s Break"}</span>
                </button>
                <button
                  onClick={() => { setIsTimerRunning(false); setSecondsLeft(20); }}
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Reset"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Exercises Grid */}
        <section className="mb-14">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
            Daily Extraocular Conditioning Routine
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {exercises.map((ex, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${ex.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                        {ex.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {ex.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">Duration: {ex.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {ex.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50/60 p-2.5 rounded-xl">
                  <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>Clinical Benefit: {ex.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Footer with Eye Blinking Button */}
        <div className="bg-indigo-50 border-2 border-indigo-200 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-indigo-950 mb-1">Return to Medical Library</h3>
            <p className="text-xs text-indigo-800">Explore comprehensive condition guides for Glaucoma, Cataract, DR, and AMD.</p>
          </div>
          <button
            onClick={() => navigate("/medical-library")}
            className="know-more-button whitespace-nowrap"
          >
            <span>Back to Library</span>
          </button>
        </div>

      </main>
    </div>
  );
};
