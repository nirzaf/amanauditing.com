export interface LinkItem {
  title: string;
  url: string;
  description: string;
}

export interface LinkCategory {
  category: string;
  items: LinkItem[];
}

export const links: LinkCategory[] = [
  {
    category: "Qatar Regulatory Bodies",
    items: [
      {
        title: "Qatar Financial Markets Authority (QFMA)",
        url: "https://www.qfma.org.qa/",
        description: "Qatar's financial markets regulator overseeing audit and compliance requirements for listed companies."
      },
      {
        title: "Ministry of Commerce and Industry - Qatar",
        url: "https://www.moci.gov.qa/",
        description: "Government ministry regulating commercial activities and business licensing in Qatar."
      }
    ]
  },
  {
    category: "International Standards & Regulatory Bodies",
    items: [
      {
        title: "International Auditing and Assurance Standards Board (IAASB)",
        url: "https://www.iaasb.org/",
        description: "Global standards for auditing, assurance, and quality control that guide professional audit practices."
      },
      {
        title: "International Ethics Standards Board for Accountants (IESBA)",
        url: "https://www.ethicsboard.org/",
        description: "International standards on professional ethics and independence requirements for auditors and accountants."
      },
      {
        title: "International Financial Reporting Standards (IFRS)",
        url: "https://www.ifrs.org/",
        description: "Global accounting standards used for financial reporting and audit compliance."
      }
    ]
  },
  {
    category: "Professional Resources & Education",
    items: [
      {
        title: "American Institute of CPAs (AICPA)",
        url: "https://www.aicpa.org/",
        description: "Leading professional organization providing audit guidance, standards, and continuing education."
      },
      {
        title: "Institute of Chartered Accountants in England and Wales (ICAEW)",
        url: "https://www.icaew.com/",
        description: "Professional body offering audit and accounting qualifications and resources."
      },
      {
        title: "Journal of Accountancy",
        url: "https://www.journalofaccountancy.com/",
        description: "Industry publication covering latest developments in auditing, accounting, and financial reporting."
      }
    ]
  },
  {
    category: "Audit & Compliance Tools",
    items: [
      {
        title: "PCAOB - Public Company Accounting Oversight Board",
        url: "https://pcaobus.org/",
        description: "US regulatory body overseeing audit standards and quality for public companies."
      },
      {
        title: "Committee of Sponsoring Organizations (COSO)",
        url: "https://www.coso.org/",
        description: "Framework for internal controls and enterprise risk management in audit processes."
      }
    ]
  }
];
