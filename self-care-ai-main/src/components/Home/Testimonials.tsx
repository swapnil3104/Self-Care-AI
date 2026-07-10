import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajeshwari Patil",
      location: "Pune, Maharashtra",
      role: "Retired Teacher",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      quote: "I never realized how simple eye care could be. The app detected early signs of diabetic retinopathy that my regular checkup missed. It truly saved my vision."
    },
    {
      name: "Amit Deshmukh",
      location: "Mumbai, Maharashtra",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      quote: "Using this for my parents has been a blessing. The interface is so intuitive, and getting a preliminary diagnosis at home gives us such peace of mind."
    },
    {
      name: "Priya Kulkarni",
      location: "Nashik, Maharashtra",
      role: "Homemaker",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "The accuracy is incredible. I took the report to my ophthalmologist, and she was surprised at how detailed the analysis was. Highly recommended!"
    }
  ];

  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-600 rounded-full blur-[80px] mix-blend-screen opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight mb-6 text-emerald-50">
            Stories of <span className="italic text-emerald-400">Better Vision</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl font-sans font-light">
            Real people, real impact. See how our AI technology is changing lives across Maharashtra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              <Quote className="text-emerald-500 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
              
              <p className="text-lg md:text-xl font-serif leading-relaxed text-slate-200 mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-colors"
                />
                <div>
                  <h4 className="font-sans font-bold text-white text-base">{testimonial.name}</h4>
                  <p className="font-sans text-sm text-emerald-400/80">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


