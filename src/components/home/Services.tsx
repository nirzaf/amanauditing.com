import React from 'react';
import { Shield, Calculator, BarChart, DollarSign, Building, Briefcase, PieChart, Scale, FileText } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
    <div className="p-8">
      <div className="mb-6 relative">
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-100 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300" />
        <div className="relative z-10 group-hover:rotate-6 transition-transform duration-300">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-[#5616b3] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-[#5616b3]" />,
      title: "Audit & Assurance",
      description: "Audits are very complex process which requires technical knowledge and experience. We have been performing over 30 years in the industry compliance with Provision of Companies act and QFCRA."
    },
    {
      icon: <Calculator className="h-10 w-10 text-[#5616b3]" />,
      title: "Payroll Services",
      description: "Payroll plays an important role within a company and is easily identified as one of the main portion of the company's expenditure. Therefore we offer payroll services tailored for your needs."
    },
    {
      icon: <BarChart className="h-10 w-10 text-[#5616b3]" />,
      title: "Feasibility Study",
      description: "A feasibility study is an analysis that considers all of a project's relevant factors including economic, technical, legal, etc.. to ascertain the likelihood of completing the project successfully."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#5616b3]" />,
      title: "Tax Services",
      description: "Complexity of tax regulations has increased demand to engage with tax accountant/ professionals. Our firm comprised with well experienced tax team providing wide range of taxation services."
    },
    {
      icon: <Building className="h-10 w-10 text-[#5616b3]" />,
      title: "Business Valuation",
      description: "Business valuation is influenced by several factors and it is performed for a variety of purposes. Business valuation can be complex with the influence of local jurisdictional rules and available valuation methods."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#5616b3]" />,
      title: "Start-Up Assistance",
      description: "Personalized business assistance designed to help startups and small businesses overcome the obstacles standing in the way of growth."
    },
    {
      icon: <PieChart className="h-10 w-10 text-[#5616b3]" />,
      title: "Budgeting",
      description: "A business budget is a spending plan for your business based on your income and expenses. It identifies your available capital, estimates your spending, and helps you predict revenue."
    },
    {
      icon: <Scale className="h-10 w-10 text-[#5616b3]" />,
      title: "Liquidation",
      description: "Businesses can face sudden collapses or else painful decisions. Different entities have specific winding up procedures. We are a reputed firm that provide liquidation for any kind of business in Qatar."
    },
    {
      icon: <FileText className="h-10 w-10 text-[#5616b3]" />,
      title: "Financial Advisory",
      description: "Comprehensive financial guidance to help businesses make informed decisions, optimize performance, and achieve strategic objectives through expert analysis and planning."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to elevate your business success through expert guidance and innovative strategies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
