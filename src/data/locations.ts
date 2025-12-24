import type { Metadata } from 'next';

export type LocationDetail = {
  slug: string;
  city: string;
  region: string;
  hero: string;
  description: string;
  focusAreas: string[];
  neighborhoods: string[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
};

export const locations: LocationDetail[] = [
  {
    slug: 'siliguri-financial-advisor',
    city: 'Siliguri',
    region: 'North Bengal & Dooars',
    hero: 'Personalised insurance, investment, and loan guidance for Siliguri families, tea estate professionals, and business owners.',
    description:
      'Our Siliguri support desk works with entrepreneurs across Hill Cart Road, Sevoke Road, Pradhan Nagar, and Matigara. We advise on compliant mutual fund portfolios, retail and SME insurance, as well as home, LAP, and business loans sourced from NBFC and bank partners active in Siliguri.',
    focusAreas: [
      'NJP railway and Bagdogra airport staff financial wellbeing programs',
      'Tea garden families planning for education, medical, and estate succession',
      'Motor, fire, and marine insurance for logistics businesses that serve Nepal, Bhutan, and the North East',
      'Fast-track home loan comparisons for developments along Sevoke Road, Eastern Bypass, and Uttorayon'
    ],
    neighborhoods: ['Sevoke Road', 'Pradhan Nagar', 'Matigara', 'Uttorayon', 'Salbari', 'Khalpara'],
    keywords: [
      'Siliguri financial advisor',
      'Siliguri insurance agent',
      'Siliguri mutual fund distributor',
      'Home loan Siliguri',
      'Wealth planner in Siliguri'
    ],
    metaTitle: 'Siliguri Financial Advisor | Insurance, Mutual Funds & Loans',
    metaDescription:
      'PTS Finserv offers AMFI registered mutual fund, insurance, and loan advisory for families and SMEs across Siliguri, Matigara, and the Dooars.'
  },
  {
    slug: 'kolkata-financial-planner',
    city: 'Kolkata',
    region: 'Kolkata Metropolitan Area',
    hero: 'Comprehensive wealth, insurance, and loan advisory for Kolkata professionals, NRIs, and business families.',
    description:
      'From Salt Lake startups to Ballygunge family offices, our Kolkata desk designs goal-based mutual fund portfolios, succession-ready insurance coverage, and curated credit solutions. We host in-person reviews at Konnagar and virtual check-ins for NRIs tuning in from abroad.',
    focusAreas: [
      'Portfolio reviews for tech professionals in Salt Lake and New Town',
      'Comprehensive insurance programs for Ballygunge, Alipore, and Tollygunge business families',
      'Home loan and LAP comparisons for properties across Howrah, Kasba, Rajarhat, and Behala',
      'Estate planning support for HUFs and multi-generational households'
    ],
    neighborhoods: ['Salt Lake', 'New Town', 'Ballygunge', 'Alipore', 'Behala', 'Konnagar'],
    keywords: [
      'Kolkata financial planner',
      'Kolkata insurance advisor',
      'Mutual fund distributor Kolkata',
      'Loan consultant Kolkata',
      'Wealth manager Kolkata'
    ],
    metaTitle: 'Kolkata Financial Planner | Insurance, Mutual Funds, Loans',
    metaDescription:
      'Talk to PTS Finserv for AMFI registered mutual fund distribution, IRDAI insurance advisory, and loan facilitation across Kolkata.'
  },
  {
    slug: 'west-bengal-financial-services',
    city: 'West Bengal',
    region: 'Statewide Coverage',
    hero: 'Statewide insurance, investment, and loan coordination for clients across West Bengal—urban centers, industrial towns, and rural growth corridors.',
    description:
      'PTS Finserv manages portfolios for clients in Durgapur, Asansol, Malda, Bardhaman, Burdwan, and the coastal belt. Our hybrid model combines digital onboarding with on-ground documentation support in every district.',
    focusAreas: [
      'Insurance literacy workshops for MSMEs in Durgapur and Haldia',
      'Agriculture-linked protection, crop insurance, and wealth creation strategies for Burdwan and Malda',
      'Home and education loan guidance for families relocating within West Bengal',
      'NRI coordination for families whose roots remain in West Bengal but careers span the globe'
    ],
    neighborhoods: ['Durgapur', 'Asansol', 'Malda', 'Burdwan', 'Haldia', 'Howrah'],
    keywords: [
      'West Bengal financial advisor',
      'West Bengal insurance consultant',
      'West Bengal mutual fund distributor',
      'Loan consultant West Bengal',
      'Financial planner West Bengal'
    ],
    metaTitle: 'West Bengal Financial Services | Insurance, Investments, Loans',
    metaDescription:
      'Statewide AMFI & IRDAI registered advisory for West Bengal residents covering insurance, mutual funds, SIPs, SWPs, and credit solutions.'
  }
];
