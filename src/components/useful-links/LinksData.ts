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
