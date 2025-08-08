import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import UsefulLinks from './pages/UsefulLinks';
import NotFound from './pages/NotFound';
import PopupModal from './components/PopupModal';

function App() {
  useEffect(() => {
    // Add structured data for website
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Amna Auditing",
      "url": window.location.origin,
      "description": "Professional audit, assurance, and accounting services in Qatar",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${window.location.origin}/#/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent === JSON.stringify(structuredData)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <PopupModal />
        <Navbar />
        <main className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/useful-links" element={<UsefulLinks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;