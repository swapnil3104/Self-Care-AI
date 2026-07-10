import Navbar from "../../NavBar";
import { Eye, RefreshCw, MoveHorizontal, Maximize, Infinity as InfinityIcon, Clock, Target, Layers } from "lucide-react";

export const EyeExercisesPage = () => {
  const exercises = [
    {
      title: "Palming",
      desc: "Warm hands, cup over eyes, breathe deeply. Relaxes eye muscles.",
      icon: <Eye size={28} />,
      color: "bg-amber-100 text-amber-700"
    },
    {
      title: "Blinking",
      desc: "Close eyes, pause 2s, open. Squeeze lids tight while closed. Restores tear film.",
      icon: <RefreshCw size={28} />,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Pencil Push-ups",
      desc: "Focus on pencil tip at arm's length, move closer until double, move back.",
      icon: <MoveHorizontal size={28} />,
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      title: "Near and Far Focus",
      desc: "Focus on thumb (10in) for 15s, then object 20ft away for 15s. Repeat.",
      icon: <Maximize size={28} />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Figure Eight",
      desc: "Trace an imaginary figure 8 on the floor 10ft away for 30s.",
      icon: <InfinityIcon size={28} />,
      color: "bg-rose-100 text-rose-700"
    },
    {
      title: "20-20-20 Rule",
      desc: "Every 20 mins, look 20ft away for 20 seconds. Reduces strain.",
      icon: <Clock size={28} />,
      color: "bg-cyan-100 text-cyan-700"
    },
    {
      title: "Brock String",
      desc: "Use string with beads to train tracking and alignment.",
      icon: <Layers size={28} />,
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      title: "Barrel Card",
      desc: "Trains eyes to converge. Use card with red/green circles.",
      icon: <Target size={28} />,
      color: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 pt-20 pb-20 overflow-hidden">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12">

        <header className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-wide mb-4">
            VISION THERAPY
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            8 Easy Eye Exercises <br />
            <span className="text-emerald-600">Techniques & Tips</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            While exercises can't cure refractive errors like myopia, they can optimize visual skills, reduce strain, and help with focusing issues.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {exercises.map((ex, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-emerald-200 group">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${ex.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {ex.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{ex.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{ex.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



      </main>
    </div>
  );
};

