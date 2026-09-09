export type ProjectTag =
  'Finance' | 'Health' | 'Insurance' | 'Sports' | 'Property Management'
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
    name: 'Silqu',
    tag: 'Property Management',
    url: 'https://silqu.com/',
    image:
      'https://silqu.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsilqu-property-management-dashboard-kenya.9afe6cba.png&w=1200&q=80',
    imageAlt: 'Silqu property management dashboard',
    type: 'Financial services platform',
    description:
      'A focused digital experience that helps teams manage financial work with greater clarity and control.',
    impact: 'Built for simpler financial operations',
    color: 'from-indigo-500 via-blue-600 to-sky-500',
  },
  {
    name: 'Qlex',
    tag: 'Property Management',
    url: 'https://qlex.ke/',
    image: 'https://qlex.ke/hero.png',
    imageAlt: 'Qlex property management dashboard',
    type: 'Business finance platform',
    description:
      'Connected tools for organisations that need dependable workflows, better visibility and room to grow.',
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
    tag: 'Finance',
    url: 'https://kavayu.com/',
    type: 'Financial operations platform',
    description:
      'Practical digital infrastructure for financial workflows that need to stay reliable as they scale.',
    impact: 'Reliable operations, built to scale',
    color: 'from-emerald-500 via-teal-500 to-cyan-600',
  },
  {
    name: 'Qundi',
    tag: 'Finance',
    url: 'https://qundi.co/',
    image:
      'https://qundi.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures.71090b3b.png&w=1200&q=80',
    imageAlt: 'Qundi financial management features',
    type: 'Finance platform',
    description:
      'A streamlined system for making financial services easier to access, manage and understand.',
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
      'A connected digital layer helping people access insurance and health services with less friction.',
    impact: 'Built around better access to care',
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
    tag: 'Health',
    url: 'https://expendo.co/',
    image:
      'https://expendo.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9356586f.png&w=640&q=80',
    imageAlt: 'Expendo logo',
    type: 'Care coordination platform',
    description:
      'A digital layer for patient journeys, clinic operations and clearer health-service communication.',
    impact: 'Connected care, from visit to follow-up',
    color: 'from-violet-500 via-fuchsia-500 to-indigo-700',
  },
  {
    name: 'Qazeeni',
    tag: 'Finance',
    url: 'https://qazeeni.com/',
    image: 'https://qazeeni.com/_next/static/media/dashboard.0raronszuj.5k.svg',
    imageAlt: 'Qazeeni attendance dashboard',
    type: 'Financial services platform',
    description:
      'A clear and connected way to support financial workflows, decisions and customer experiences.',
    impact: 'More clarity across the workflow',
    color: 'from-fuchsia-500 via-violet-600 to-indigo-700',
  },
  {
    name: 'Mula',
    tag: 'Sports',
    url: 'https://www.mulasport.com/',
    image: 'https://www.mulasport.com/assets/logo-HhW8FIKo.png',
    imageAlt: 'Mula Sport eagle logo',
    imageFit: 'contain',
    imageScale: 'zoom-out',
    type: 'Sports platform',
    description:
      'A digital experience built to connect sporting activity, participation and community in one place.',
    impact: 'Made for movement and participation',
    color: 'from-lime-500 via-emerald-500 to-green-700',
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
]
