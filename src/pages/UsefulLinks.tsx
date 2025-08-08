import LinksHero from '../components/useful-links/LinksHero';
import LinksGrid from '../components/useful-links/LinksGrid';
import LinksDisclaimer from '../components/useful-links/LinksDisclaimer';
import SEOHead from '../components/common/SEOHead';

const UsefulLinks = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Useful Links - Professional Resources for Audit & Accounting",
    "description": "Comprehensive collection of professional resources, regulatory bodies, and industry links for audit, accounting, and financial services professionals.",
    "url": "https://amnaauditing.com/#/useful-links"
  };

  return (
    <div className="bg-white">
      <SEOHead
        title="Useful Links - Professional Audit & Accounting Resources | Amna Auditing"
        description="Access professional resources, regulatory bodies, and industry links for audit, accounting, and financial services. Qatar and international standards and guidelines."
        keywords="audit resources, accounting standards, regulatory bodies Qatar, IFRS, IAASB, professional accounting links, audit guidelines, financial reporting standards"
        canonicalUrl="https://amnaauditing.com/#/useful-links"
        structuredData={structuredData}
      />
      <LinksHero />
      <LinksGrid />
      <LinksDisclaimer />
    </div>
  );
};

export default UsefulLinks;