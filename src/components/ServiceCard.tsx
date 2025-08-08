import React from 'react';
import { 
  FileCheck, 
  Users, 
  BarChart3, 
  Calculator, 
  TrendingUp, 
  Rocket, 
  PieChart, 
  Building, 
  Briefcase,
  Shield,
  Target,
  Award
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  // Map service titles to appropriate icons
  const getServiceIcon = (title: string, iconName?: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Audit & Assurance': <FileCheck className="h-12 w-12" />,
      'Payroll Services': <Users className="h-12 w-12" />,
      'Feasibility Study': <BarChart3 className="h-12 w-12" />,
      'Tax Services': <Calculator className="h-12 w-12" />,
      'Business Valuation': <TrendingUp className="h-12 w-12" />,
      'Start-Up Assistance': <Rocket className="h-12 w-12" />,
      'Budgeting': <PieChart className="h-12 w-12" />,
      'Liquidation': <Building className="h-12 w-12" />,
      'Financial Advisory': <Briefcase className="h-12 w-12" />,
      'Compliance': <Shield className="h-12 w-12" />,
      'Strategic Planning': <Target className="h-12 w-12" />,
      'Quality Assurance': <Award className="h-12 w-12" />
    };

    // Use custom icon name if provided, otherwise match by title
    if (iconName && iconMap[iconName]) {
      return iconMap[iconName];
    }
    
    return iconMap[title] || <Briefcase className="h-12 w-12" />;
  };

  return (
    <article className="relative h-64 w-full group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5616b3] via-purple-700 to-purple-900 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative h-full p-6 flex flex-col">
          {/* Professional Icon Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
              <div className="text-white group-hover:text-yellow-300 transition-colors duration-300">
                {getServiceIcon(title, icon)}
              </div>
            </div>
            
            {/* Premium badge */}
            <div className="flex items-center space-x-1 bg-yellow-400/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-400/30">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-300 text-xs font-medium">Premium</span>
            </div>
          </div>
          
          {/* Card Content */}
          <header className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors duration-300">
              {title}
            </h3>
          </header>
          
          <p className="text-gray-200 text-sm flex-grow leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
            {description}
          </p>
          
          {/* Professional Footer with Progress Indicator */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-1 bg-white/20 rounded-full group-hover:bg-yellow-400/40 transition-all duration-300"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animation: 'pulse 2s infinite'
                  }}
                />
              ))}
            </div>
            
            {/* Arrow indicator */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:translate-x-1">
              <svg 
                className="w-4 h-4 text-white group-hover:text-yellow-300 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;