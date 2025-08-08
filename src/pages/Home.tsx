import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import SectionDivider from '../components/common/SectionDivider';
import SEOHead from '../components/common/SEOHead';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Amna Auditing - Professional Audit & Assurance Services in Qatar",
    "description": "Leading audit and financial advisory services in Qatar with 25+ years of excellence. Professional auditing, assurance, and business advisory services.",
    "url": "https://amnaauditing.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Amna Auditing Services",
      "description": "Professional audit, assurance, and accounting services in Qatar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building No 189, Zone 53, Street 790, Umm Al Dome St",
        "addressLocality": "Ar Rayyan",
        "addressCountry": "QA"
      },
      "telephone": "+974 5530 4717",
      "email": "info@amnaauditing.com"
    }
  };

  return (
    <div className="bg-white">
      <SEOHead
        title="Amna Auditing - Professional Audit & Assurance Services | Qatar"
        description="Leading audit and financial advisory services in Qatar with 25+ years of excellence. Professional auditing, assurance, payroll, tax services, and business advisory solutions."
        keywords="audit services Qatar, professional auditing, assurance services, financial advisory Qatar, tax services, payroll management, business valuation, Amna Auditing"
        canonicalUrl="https://amnaauditing.com"
        structuredData={structuredData}
      />
      <HeroSection />
      <SectionDivider />
      <WhyChooseUs />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Services />
    </div>
  );
};

export default Home;