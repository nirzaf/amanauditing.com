import React from 'react';
import { ArrowRight, Shield, Calculator, BarChart, DollarSign, Building, Briefcase, PieChart, Scale, FileText, AlertTriangle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/c1glhbr6p/audit_adobestock_284088192_1.jpeg?updatedAt=1732301673629"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5616b3]/95 via-[#5616b3]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl ml-0 space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Leading Audit Firm in Qatar
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-100">
                Audit & Assurance
              </span>
              Services
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-200 max-w-2xl">
              Delivering excellence in audit, tax, and advisory services with integrity and precision. 
              Trust our expertise to guide your business towards success.
            </p>
          </div>

          {/* CTA Buttons - Centered */}
          <div className="flex justify-center mt-12">
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-[#5616b3] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <img
                src="https://ik.imagekit.io/c1glhbr6p/audit.webp?updatedAt=1732211618079"
                alt="Accurate Accounting"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Accurate Accounting Records</h3>
              <p className="text-gray-600">
                When it comes to ensuring the accuracy of your company's financial records, you need a partner that you can trust.
              </p>
            </div>
            <div className="text-center p-6">
              <img
                src="https://ik.imagekit.io/c1glhbr6p/Accounting-Auditing-Services-1.jpg?updatedAt=1732211621818"
                alt="Accounting Services"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Accounting Services</h3>
              <p className="text-gray-600">
                We provide a range of accounting services for individuals and businesses of all sizes. Our first step is to understand what you do and how you do it.
              </p>
            </div>
            <div className="text-center p-6">
              <img
                src="https://ik.imagekit.io/c1glhbr6p/accounting-auditing-new-e1561310683221.jpg?updatedAt=1732211620934"
                alt="Financial Audits"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Financial Statement Audits</h3>
              <p className="text-gray-600">
                You may need to secure additional financing, satisfy a legal requirement or value your company's stock which requires a financial statement audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-[#5616b3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No hidden cost- free hearing</h3>
              <p className="text-gray-600">
                Our team of dynamic individuals with unique passions would love serve you to give you free consultation & high-quality services without hidden cost.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="h-6 w-6 text-[#5616b3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bespoke solutions</h3>
              <p className="text-gray-600">
                Deep understanding of services and their diversity of packages will make us out from the crowd. We operate as an extension of your own team.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-[#5616b3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Creative and passionate team</h3>
              <p className="text-gray-600">
                In house teams are specialize in each area to deliver keen result with effective services using good methodology to leave no stone returned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions tailored to elevate your business success through expert guidance and innovative strategies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="mb-6 relative">
                    <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-100 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-300" />
                    <div className="relative z-10 group-hover:rotate-6 transition-transform duration-300">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#5616b3] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex justify-end">
                    <Link
                      to="/contact"
                      className="text-[#5616b3] font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-purple-700"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;