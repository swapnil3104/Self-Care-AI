import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface PreventionCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
}

const PreventionCard = ({ title, image, link, description }: PreventionCardProps) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    navigate(link);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const fallbackImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1000&q=80";

  return (
    <article 
      className="group relative h-[400px] w-full overflow-hidden rounded-3xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`Read article about ${title}`}
    >
      {/* Background Image with Loading State */}
      <div className="absolute inset-0 bg-slate-200 animate-pulse">
        <img 
          src={imageError ? fallbackImage : image}
          alt={title} 
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent transition-opacity duration-500 group-hover:from-slate-900/90 group-hover:via-slate-900/60" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
            {title}
          </h3>
          
          {description && (
            <p className="text-slate-200 text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {description}
            </p>
          )}
        </div>
        
        {/* Enhanced Button */}
        <div className="overflow-hidden transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
          <button 
            className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <span className="font-semibold">Read Article</span>
            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white group-hover:bg-emerald-700 transition-colors">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>
      </div>

      {/* Loading Indicator */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </article>
  );
};

export const HealthPreventionCards = () => {
  const cards = [
    {
      title: "How to Keep Your Eyes Healthy", 
      image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=1000&q=80", // New image: closeup of healthy eyes
      link: "/medical-library/eye-health",
      description: "Essential daily habits and professional tips for maintaining optimal eye health throughout your life."
    },
    {
      title: "8 Easy Eye Exercises to Improve Vision", 
      image: "https://images.pexels.com/photos/3768912/pexels-photo-3768912.jpeg?auto=compress&w=1000&q=80", // New image: person doing eye exercises
      link: "/medical-library/eye-exercises",
      description: "Simple exercises you can do anywhere to strengthen your eye muscles and improve visual clarity."
    }
  ];

  return (
    <section className="py-24 bg-white" aria-labelledby="health-prevention-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            id="health-prevention-heading"
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4"
          >
            Eye Health & Prevention
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Proactive steps and daily habits to maintain crystal clear vision for life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <PreventionCard 
              key={index}
              title={card.title}
              image={card.image}
              link={card.link}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};