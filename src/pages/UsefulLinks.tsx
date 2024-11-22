import React from 'react';
import { ExternalLink } from 'lucide-react';

const UsefulLinks = () => {
  const links = [
    {
      category: "Regulatory Bodies",
      items: [
        {
          title: "International Auditing and Assurance Standards Board (IAASB)",
          url: "https://www.iaasb.org/",
          description: "Access international standards on auditing and quality control."
        },
        {
          title: "International Ethics Standards Board for Accountants (IESBA)",
          url: "https://www.ethicsboard.org/",
          description: "Find resources on professional ethics and independence requirements."
        }
      ]
    },
    {
      category: "Professional Resources",
      items: [
        {
          title: "International Financial Reporting Standards (IFRS)",
          url: "https://www.ifrs.org/",
          description: "Access global accounting standards and updates."
        },
        {
          title: "American Institute of CPAs (AICPA)",
          url: "https://www.aicpa.org/",
          description: "Professional resources and guidance for accounting professionals."
        }
      ]
    },
    {
      category: "Research & Publications",
      items: [
        {
          title: "Journal of Accountancy",
          url: "https://www.journalofaccountancy.com/",
          description: "Latest news and developments in accounting and auditing."
        },
        {
          title: "Accounting Research Database",
          url: "https://www.accountingresearch.org/",
          description: "Access academic research and professional publications."
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#5616b3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Useful Links</h1>
          <p className="text-xl text-gray-200">
            Access valuable resources and professional guidance
          </p>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {links.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2 text-[#5616b3]">
                          {link.title}
                        </h3>
                        <p className="text-gray-600">{link.description}</p>
                      </div>
                      <ExternalLink className="text-[#5616b3] ml-4 flex-shrink-0" size={24} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The external links provided are for reference purposes only. AmnaAuditing does not 
            endorse or take responsibility for the content of external websites. Please review 
            the terms and conditions of each website before use.
          </p>
        </div>
      </section>
    </div>
  );
};

export default UsefulLinks;