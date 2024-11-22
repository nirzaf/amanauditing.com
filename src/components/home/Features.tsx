import React from 'react';
import { DollarSign, Building, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6 text-[#5616b3]" />,
      title: "No hidden cost- free hearing",
      description: "Our team of dynamic individuals with unique passions would love serve you to give you free consultation & high-quality services without hidden cost."
    },
    {
      icon: <Building className="h-6 w-6 text-[#5616b3]" />,
      title: "Bespoke solutions",
      description: "Deep understanding of services and their diversity of packages will make us out from the crowd. We operate as an extension of your own team."
    },
    {
      icon: <Users className="h-6 w-6 text-[#5616b3]" />,
      title: "Creative and passionate team",
      description: "In house teams are specialize in each area to deliver keen result with effective services using good methodology to leave no stone returned."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
