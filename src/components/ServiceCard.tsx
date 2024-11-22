import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="relative h-56 w-full transform transition-transform duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-r from-[#5616b3] to-purple-800 rounded-xl shadow-xl">
        <div className="h-full p-6 flex flex-col">
          {/* Card Chip Design */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-12 h-8 bg-yellow-400 rounded-md opacity-80" />
            <div className="w-6 h-6 rounded-full bg-white/20" />
          </div>
          
          {/* Card Content */}
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm flex-grow">{description}</p>
          
          {/* Card Footer Design */}
          <div className="mt-4">
            <div className="flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-1 bg-white/30 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;