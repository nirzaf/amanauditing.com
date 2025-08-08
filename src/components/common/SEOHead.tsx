import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/logo.png',
  structuredData
}) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]') || 
                           document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Set keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]') || 
                          document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      if (!document.querySelector('meta[name="keywords"]')) {
        document.head.appendChild(metaKeywords);
      }
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) ogImageTag.setAttribute('content', ogImage);

    // Set canonical URL if provided
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      script.id = 'page-structured-data';
      
      // Remove existing page structured data
      const existingScript = document.getElementById('page-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (structuredData) {
        const script = document.getElementById('page-structured-data');
        if (script) {
          document.head.removeChild(script);
        }
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;