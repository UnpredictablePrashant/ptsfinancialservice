import type { ServiceCategory } from '@/types';

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'investments',
    title: 'Investment Planning',
    description:
      'Goal-based roadmaps spanning mutual funds, SIP/SWP strategies, demat onboarding, and disciplined reviews.',
    items: [
      'Mutual funds & direct plans',
      'SIP / SWP design & monitoring',
      'Fixed deposits & debt ladders',
      'Demat account opening support',
      'Stock broking coordination',
      'Retirement & child-education corpus planning'
    ],
    path: '/investments'
  },
  {
    slug: 'insurance',
    title: 'Insurance Advisory',
    description:
      'End-to-end coverage design across life, health, motor, travel, business and group benefits with IRDAI compliance.',
    items: [
      'Life insurance & term cover',
      'Health/top-up & wellness riders',
      'Motor and travel protection',
      'Fire & business insurance',
      'Group insurance desks',
      'Claims assistance & documentation'
    ],
    path: '/insurance'
  },
  {
    slug: 'loans',
    title: 'Loans & Credit',
    description:
      'Hand-holding for home and personal loans with transparent comparisons across banks and NBFC partners.',
    items: [
      'Home loan shortlisting & paperwork',
      'Balance transfers & top-ups',
      'Personal loan advisory',
      'Eligibility benchmarking',
      'Rate negotiation support',
      'Disbursement tracking'
    ],
    path: '/loans'
  }
];

export const wealthProcess = [
  {
    title: 'Discovery & priorities',
    body: 'Understand cash flows, risk appetite, dependents, and milestones to baseline every decision.'
  },
  {
    title: 'Product due diligence',
    body: 'Shortlist AMFI registered funds, rated insurers, and regulated loan providers aligned to your goals.'
  },
  {
    title: 'Execution & monitoring',
    body: 'Paperwork, digital journeys, and ongoing reviews with transparent reporting dashboards.'
  }
];

export const insurancePillars = [
  {
    title: 'Coverage depth',
    body: 'Layered life + health + general insurance programmes for individuals, families, and SMEs.'
  },
  {
    title: 'Claims readiness',
    body: 'Documentation checklists, nominee awareness, and escalation pathways to minimise claim surprises.'
  },
  {
    title: 'Compliance focus',
    body: 'IRDAI registered processes, transparent commissions, and product suitability documentation.'
  }
];

export const loanEssentials = [
  {
    title: 'Data-led comparisons',
    body: 'Compare interest, processing fees, and eligibility across banking partners before shortlisting.'
  },
  {
    title: 'Application hand-holding',
    body: 'Checklist-driven approach for KYC, income proofs, valuation reports, and sanction tracking.'
  },
  {
    title: 'Post-disbursal care',
    body: 'Balance transfer opportunity reviews, prepayment guidance, and EMI discipline reminders.'
  }
];
