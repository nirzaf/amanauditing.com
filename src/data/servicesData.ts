export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  category: 'core' | 'advisory' | 'compliance';
}

export const servicesData: Service[] = [
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    description: 'Comprehensive financial audits and assurance services ensuring compliance with international standards and regulatory requirements.',
    category: 'core'
  },
  {
    id: 'payroll-services',
    title: 'Payroll Services',
    description: 'Complete payroll management solutions including salary processing, tax calculations, and compliance with Qatar labor laws.',
    category: 'core'
  },
  {
    id: 'feasibility-study',
    title: 'Feasibility Study',
    description: 'In-depth project viability analysis and market assessment to support informed business investment decisions.',
    category: 'advisory'
  },
  {
    id: 'tax-services',
    title: 'Tax Services',
    description: 'Expert taxation guidance, compliance, and planning services for individuals and businesses in Qatar.',
    category: 'compliance'
  },
  {
    id: 'business-valuation',
    title: 'Business Valuation',
    description: 'Professional business assessment and valuation services for mergers, acquisitions, and strategic planning.',
    category: 'advisory'
  },
  {
    id: 'startup-assistance',
    title: 'Start-Up Assistance',
    description: 'Comprehensive support for new business ventures including incorporation, licensing, and initial setup guidance.',
    category: 'advisory'
  },
  {
    id: 'budgeting',
    title: 'Budgeting',
    description: 'Strategic financial planning and budget management services to optimize resource allocation and financial performance.',
    category: 'advisory'
  },
  {
    id: 'liquidation',
    title: 'Liquidation',
    description: 'Professional business winding up procedures and asset liquidation services ensuring legal compliance.',
    category: 'compliance'
  },
  {
    id: 'financial-advisory',
    title: 'Financial Advisory',
    description: 'Strategic financial guidance and consulting services to drive business growth and optimize financial performance.',
    category: 'advisory'
  }
];

export const getServicesByCategory = (category: 'core' | 'advisory' | 'compliance') => {
  return servicesData.filter(service => service.category === category);
};

export const getAllServices = () => servicesData;