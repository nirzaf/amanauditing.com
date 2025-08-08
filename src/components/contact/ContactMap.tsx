import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ContactMap = () => {
  useEffect(() => {
    // Add structured data for local business
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Amna Auditing Services",
      "image": "/logo.png",
      "description": "Professional audit, assurance, and accounting services in Qatar",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "QA",
        "addressLocality": "Qatar"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.268150977665325",
        "longitude": "51.407118075015426"
      },
      "url": window.location.origin,
      "telephone": "+974-XXXX-XXXX",
      "priceRange": "$$",
      "openingHours": "Mo-Th 08:00-17:00, Su 08:00-14:00",
      "serviceArea": {
        "@type": "Country",
        "name": "Qatar"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(localBusinessData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent === JSON.stringify(localBusinessData)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="max-w-5xl mx-auto" aria-labelledby="map-heading">
      <h2 id="map-heading" className="sr-only">Our Location</h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0723658703528!2d51.407118075015426!3d25.268150977665325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d953115c6bef%3A0xbff1b2b3ae5e4bab!2sAmna%20Auditing%20Services!5e0!3m2!1sen!2suk!4v1732303794585!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Amna Auditing Services Location - Qatar"
          aria-label="Interactive map showing Amna Auditing Services location in Qatar"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default ContactMap;
