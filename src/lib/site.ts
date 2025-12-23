export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: 'PTS Financial Services',
  tagline: 'Trusted partner for insurance & investment growth',
  description:
    'PTS Financial Services is an India-based advisory desk specialising in compliant insurance, investment, and loan guidance for families and business owners.',
  url: 'https://www.ptsfinancialservices.in',
  email: 'ptsfinserv369@gmail.com',
  phoneDisplay: '+91-9333239993',
  phoneHref: '+919333239993',
  whatsappDisplay: '+91-9333239993',
  whatsappHref: 'https://wa.me/919333239993?text=Hi%20PTS%20Financial%20Services',
  addressLine: '67/F Haran Banerjee Lane, Konnagar, Hooghly, West Bengal 712235',
  branchAddress: 'Branch: Naresh More Bazar, Near Ashish Ghar, Siliguri 734006',
  serviceArea: 'Serving clients across India with NRI coordination support.',
  timings: 'Mon – Sat · 9:30 AM – 7:30 PM IST'
};

export const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products & Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'Locations', href: '/locations' },
  { label: 'Why Choose Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' }
];
