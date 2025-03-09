
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    "Ready-to-use AI agents domain",
    "Perfect for AI service businesses",
    "Memorable and descriptive name",
    "Immediate transfer available",
    "SEO-friendly domain name",
    "Industry-specific branding",
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-8 px-4">
      <h3 className="font-semibold text-lg mb-4 text-center">Domain Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 p-2 rounded-md bg-accent/50"
          >
            <Check size={16} className="text-primary" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
