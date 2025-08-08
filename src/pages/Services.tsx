import ServicesHero from '../components/services/ServicesHero';
import ServiceCategories from '../components/services/ServiceCategories';
import ServiceDetails from '../components/services/ServiceDetails';
import ServiceProcess from '../components/services/ServiceProcess';
import ServiceCTA from '../components/services/ServiceCTA';
import SEOHead from '../components/common/SEOHead';

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Professional Services - Audit, Tax, and Financial Advisory | Amna Auditing",
    "description": "Comprehensive audit, assurance, tax, and financial advisory services in Qatar. Expert solutions for business growth and compliance.",
    "url": "https://amnaauditing.com/#/services",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Amna Auditing Services",
      "serviceType": ["Audit Services", "Tax Services", "Financial Advisory", "Business Consulting"],
      "areaServed": {
        "@type": "Country",
        "name": "Qatar"
      },
      "provider": {
        "@type": "Organization",
        "name": "Amna Auditing Services"
      }
    }
  };

  return (
    <div className="bg-white">
      <SEOHead
        title="Professional Services - Audit, Tax & Financial Advisory | Amna Auditing Qatar"
        description="Comprehensive audit, assurance, tax, payroll, and financial advisory services in Qatar. Expert business solutions with 25+ years of experience."
        keywords="audit services Qatar, tax services, financial advisory, payroll services, business valuation, feasibility study, startup assistance, professional services Qatar"
        canonicalUrl="https://amnaauditing.com/#/services"
        structuredData={structuredData}
      />
      <ServicesHero />
      <ServiceCategories />
      <ServiceDetails />
      <ServiceProcess />
      <ServiceCTA />
    </div>
  );
};

export default Services;