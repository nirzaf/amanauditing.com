import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import SEOHead from '../components/common/SEOHead';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Amna Auditing Services",
      "description": "Professional audit, assurance, and accounting services provider in Qatar with expertise in financial auditing, compliance, and business advisory services.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "QA",
        "addressLocality": "Qatar"
      },
      "serviceArea": {
        "@type": "Country",
        "name": "Qatar"
      }
    }
  };

  return (
    <div className="bg-white">
      <SEOHead
        title="About Amna Auditing - Professional Audit Services in Qatar"
        description="Learn about Amna Auditing Services, Qatar's trusted provider of professional audit, assurance, and accounting services. Our mission, vision, and commitment to excellence."
        keywords="about amna auditing, audit company Qatar, professional auditors, accounting firm Qatar, audit services history, company mission vision"
        canonicalUrl="https://amnaauditing.com/#/about"
        structuredData={structuredData}
      />
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
    </div>
  );
};

export default About;