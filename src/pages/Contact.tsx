import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import SEOHead from '../components/common/SEOHead';

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Amna Auditing Services",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "Arabic"],
        "areaServed": "QA"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "QA",
        "addressLocality": "Qatar"
      }
    }
  };

  return (
    <div className="bg-white">
      <SEOHead
        title="Contact Amna Auditing - Get Professional Audit Services in Qatar"
        description="Contact Amna Auditing Services for professional audit, assurance, and accounting services in Qatar. Get in touch for consultations and service inquiries."
        keywords="contact amna auditing, audit services Qatar contact, professional auditors Qatar, accounting services contact, audit consultation Qatar"
        canonicalUrl="https://amnaauditing.com/#/contact"
        structuredData={structuredData}
      />
      <ContactHero />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfo />
          <ContactForm />
          <ContactMap />
        </div>
      </section>
    </div>
  );
};

export default Contact;