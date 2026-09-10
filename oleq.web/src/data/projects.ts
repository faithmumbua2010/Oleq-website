export type ProjectTag =
  'Finance' | 'Health' | 'Insurance' | 'Sports' | 'Property Management' | 'Operations'
export type Project = {
  name: string
  tag: ProjectTag
  url?: string
  image?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain'
  imageScale?: 'normal' | 'zoom-out'
  description: string
  impact: string
  type: string
  color: string
}

export const projects: Project[] = [
  {
    name: 'Olefi',
    tag: 'Finance',
    url: 'https://www.olefi.co/',
    image: 'https://www.olefi.co/product/dashboard.png',
    imageAlt: 'Olefi account dashboard with wallets and cash-flow metrics',
    type: 'Membership finance platform',
    description:
      'A dependable membership, billing and collections platform for high-volume group finance.',
    impact: '500K+ memberships managed',
    color: 'from-sky-500 via-blue-500 to-indigo-700',
  },
 
  {
    name: 'Qlex',
    tag: 'Property Management',
    url: 'https://qlex.ke/',
    image: 'https://qlex.ke/hero.png',
    imageAlt: 'Qlex property management dashboard',
    type: 'Property management platform',
    description:
     'Connected tools for landlords and agencies that need dependable rent collection, tenant records and clear reporting.',
    impact: 'Designed for confident decisions',
    color: 'from-cyan-500 via-sky-600 to-blue-700',
  },
  {
    name: 'iResidence',
    tag: 'Property Management',
    url: 'https://iresidence.co/',
    image: 'https://iresidence.co/images/handphone.png',
    imageAlt: 'iResidence app interface',
    type: 'Property management platform',
    description:
      'A connected experience for managing properties, residents, communication and everyday operations.',
    impact: 'Clearer management from one place',
    color: 'from-amber-500 via-orange-500 to-rose-600',
  },
  {
    name: 'Kavayu',
    tag: 'Insurance',
    url: 'https://kavayu.com/',
    type: 'Financial operations platform',
    description:
    'A membership-based support network that helps families cover last-expense costs and navigate loss with less financial strain.',  
    impact: '30K+ members supported',
    color: 'from-emerald-500 via-teal-500 to-cyan-600',
  },
  {
    name: 'Qundi',
    tag: 'Finance',
    url: 'https://qundi.co/',
    image:
      'https://qundi.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures.71090b3b.png&w=1200&q=80',
    imageAlt: 'Qundi financial management features',
    type: 'Digital SACCO & group loans platform',
    description:
    'Savings and group lending built for riders, chamas and informal groups, with flexible repayment terms.',  
    impact: 'Made for low-friction finance',
    color: 'from-violet-500 via-indigo-600 to-blue-700',
  },
  {
    name: 'Mamabima',
    tag: 'Insurance',
    url: 'https://mamabima.com/',
    image:
      'https://mamabima.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmmb_banner7.d44aec20.jpg&w=1200&q=80',
    imageAlt: 'Mama Bima insurance plan',
    type: 'Insurance and health platform',
    description:
    'A digital layer that helps families and businesses compare and access life, medical, car and travel cover in one place.',  
    impact: '5,000+ families and businesses served',
    color: 'from-blue-600 via-sky-500 to-cyan-400',
  },
  {
    name: 'Haraka',
    tag: 'Finance',
    type: 'Finance platform',
    description:
      'A fast, dependable digital experience for financial services and the people who rely on them.',
    impact: 'Designed for momentum',
    color: 'from-orange-500 via-amber-500 to-red-600',
  },
  {
    name: 'Expendo',
    tag: 'Finance', 
    url: 'https://expendo.co/',
    image:
      'https://expendo.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9356586f.png&w=640&q=80',
    imageAlt: 'Expendo logo',
    type: 'Mobility fintech & insurance platform',
    description:
     'Affordable financing, accident and funeral cover for boda boda riders and informal workers, paid in small daily instalments.', 
    impact: 'Built for Africa\u2019s informal economy',
    color: 'from-violet-500 via-fuchsia-500 to-indigo-700',
  },
  {
    name: 'Qazeeni',
    tag: 'Finance',
    url: 'https://qazeeni.com/',
    image: 'https://qazeeni.com/_next/static/media/dashboard.0raronszuj.5k.svg',
    imageAlt: 'Qazeeni attendance dashboard',
    type: 'Workforce attendance platform',
    description:
      'Real-time attendance and workforce management with GPS check-ins, biometric clock-in and leave tracking for teams on the ground.',
    impact: 'More clarity across the workflow',
    color: 'from-fuchsia-500 via-violet-600 to-indigo-700',
  },
 
  {
    name: 'Buza App',
    tag: 'Sports',
    type: 'Sports community app',
    description:
      'A mobile-first platform helping sports communities stay connected, active and informed.',
    impact: 'Bringing the game closer to people',
    color: 'from-rose-500 via-orange-500 to-amber-600',
  },
]

export const projectTags: Array<'All' | ProjectTag> = [
  'All',
  'Finance',
  'Insurance',
  'Sports',
  'Property Management',
  'Operations',
]
