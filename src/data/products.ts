import type { ProductOffering } from '@/types';

export const productOfferings: ProductOffering[] = [
  {
    title: 'Life Insurance',
    category: 'Insurance',
    description: 'Long-term protection plans that ensure nominee benefits and legacy security.'
  },
  {
    title: 'Health Insurance',
    category: 'Insurance',
    description: 'Comprehensive mediclaim and top-up covers with cashless claim coordination.'
  },
  {
    title: 'Mutual Funds',
    category: 'Investments',
    description: 'Goal-based fund selection across equity, debt, and hybrid categories.'
  },
  {
    title: 'Home Loans',
    category: 'Loans',
    description: 'Comparison of rates, fees, and tenures to secure affordable home financing.'
  },
  {
    title: 'Exchange Traded Funds (ETF)',
    category: 'Investments',
    description: 'Low-cost passive building blocks for diversified portfolios.'
  },
  {
    title: 'Alternative Investment Funds (AIF)',
    category: 'Investments',
    description: 'Curated AIF access for eligible investors seeking differentiated strategies.'
  },
  {
    title: 'Portfolio Management Services (PMS)',
    category: 'Investments',
    description: 'Discretionary PMS partners vetted for transparency and reporting.'
  },
  {
    title: 'Systematic Investment Plans (SIP)',
    category: 'Investments',
    description: 'Automated contributions that instil investing discipline.'
  },
  {
    title: 'SWP / STP',
    category: 'Investments',
    description: 'Structured withdrawal/transfer plans to manage cash flows tax efficiently.'
  },
  {
    title: 'Fixed Deposits (FD)',
    category: 'Investments',
    description: 'Bank and corporate FD ladders for capital preservation with liquidity.'
  },
  {
    title: 'Motor Insurance',
    category: 'Insurance',
    description: 'Own damage + third-party coverage with zero-dep and add-ons as needed.'
  },
  {
    title: 'HUF Planning',
    category: 'Wealth',
    description: 'Creation and management of Hindu Undivided Family entities for estate efficiency.'
  },
  {
    title: 'Business Insurance',
    category: 'Insurance',
    description: 'Fire, burglary, liability, and group plans tailored to SME requirements.'
  },
  {
    title: 'Travel Insurance',
    category: 'Insurance',
    description: 'Single trip and multi-trip covers with medical evacuation support.'
  },
  {
    title: 'Fire Insurance',
    category: 'Insurance',
    description: 'Industrial and commercial fire policies with reinstatement clauses.'
  },
  {
    title: 'Marine Insurance',
    category: 'Insurance',
    description: 'Transit risk coverage for imports, exports, and inland movements.'
  },
  {
    title: 'Crop Insurance',
    category: 'Insurance',
    description: 'Weather-indexed and PMFBY-aligned solutions for agri stakeholders.'
  },
  {
    title: 'Demat Account Opening',
    category: 'Investments',
    description: 'Assistance with KYC, broker selection, and platform readiness.'
  },
  {
    title: 'ULIP (Unit Linked Insurance Plan)',
    category: 'Insurance',
    description: 'Goal-driven ULIPs balancing life cover with market-linked growth.'
  },
  {
    title: 'Term Insurance',
    category: 'Insurance',
    description: 'Pure risk cover with appropriate sum assured and riders.'
  },
  {
    title: 'Guaranteed Pension Plan',
    category: 'Insurance',
    description: 'Assured annuity and income plans for retirement stability.'
  }
];

export const insuranceTypes = productOfferings.filter((item) => item.category === 'Insurance');
