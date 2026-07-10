import { useNavigate } from "react-router-dom";

interface ConditionCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ConditionCard = ({ title, description, image, link }: ConditionCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[2rem] border-2 border-slate-900 p-6 flex flex-col h-full shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
      <div className="relative h-48 mb-6 rounded-2xl overflow-hidden border-2 border-slate-900">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">{title}</h3>
      
      <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <button 
        onClick={() => navigate(link)}
        className="know-more-button mx-auto w-full justify-center"
      >
        <span>Know more..</span>
      </button>
    </div>
  );
};

export const ConditionCards = () => {
  const conditions = [
    {
      title: "Glaucoma",
      description: "Glaucoma is a group of eye diseases that damage the optic nerve, which is crucial for vision. It is often caused by high pressure inside the eye, but can also develop with normal pressure. Early symptoms are often absent, leading to the nickname \"silent thief of sight,\" but can include a gradual loss of peripheral vision.",
      image: "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/eye-problems/glaucoma-hero.jpg", 
      link: "/medical-library/glaucoma"
    },
    {
      title: "Cataract",
      description: "A cataract is the clouding of the eye's natural lens, which leads to blurry vision. It happens when proteins in the lens clump together, often due to aging, and it can cause vision to become hazy, colors to look faded, and may result in glare or halos around lights.",
      image: "https://www.shutterstock.com/image-photo/macro-shot-human-eye-cataract-600nw-2173863481.jpg",
      link: "/medical-library/cataract"
    },
    {
      title: "Diabetic Retinopathy",
      description: "Diabetic Retinopathy is an eye disease that affects people with Type 1 or Type 2 Diabetes. It is caused by consistently high blood sugar levels, which damage the tiny blood vessels in the retina—the light-sensitive tissue at the back of your eye responsible for sending visual information to your brain.",
      image: "https://t4.ftcdn.net/jpg/02/16/47/50/360_F_216475013_4w2g1X6X6X6X6X6X6X6X6X6X6X6X6X6.jpg", // Placeholder, ideally use a better one
      link: "/medical-library/diabetic-retinopathy"
    }
  ];

  return (
    <section className="py-24 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="inline-block px-12 py-4 rounded-full border-2 border-cyan-400 bg-cyan-50 text-3xl md:text-4xl font-serif font-bold text-cyan-700 shadow-[4px_4px_0px_0px_rgba(34,211,238,1)]">
            Explore Eye Conditions
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {conditions.map((condition, index) => (
            <ConditionCard key={index} {...condition} />
          ))}
        </div>
      </div>
    </section>
  );
};
