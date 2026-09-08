export type ProjectTag = 'Finance' | 'Education' | 'Health'

export type Project = {
  name: string
  tag: ProjectTag
  description: string
  impact: string
  type: string
  color: string
}

export const projects: Project[] = [
  {
    name: 'Kava',
    tag: 'Finance',
    type: 'Membership finance platform',
    description:
      'A dependable membership, billing and collections platform for high-volume group finance.',
    impact: '500K+ memberships managed',
    color: 'from-sky-500 via-blue-500 to-indigo-700',
  },
  {
    name: 'Msingi Learning',
    tag: 'Education',
    type: 'Learning infrastructure',
    description:
      'A learner-first platform connecting teaching, assessment and family communication in one place.',
    impact: '4.9M+ learner records supported',
    color: 'from-teal-500 via-cyan-500 to-sky-700',
  },
  {
    name: 'Careline',
    tag: 'Health',
    type: 'Care coordination platform',
    description:
      'A digital layer for patient journeys, clinic operations and clearer health-service communication.',
    impact: 'Connected care, from visit to follow-up',
    color: 'from-violet-500 via-fuchsia-500 to-indigo-700',
  },
  {
    name: 'OlePay',
    tag: 'Finance',
    type: 'Payment orchestration',
    description:
      'One integration for organisations moving money across mobile, bank and card payment rails.',
    impact: '12 African markets reached',
    color: 'from-blue-600 via-sky-500 to-cyan-400',
  },
  {
    name: 'Tiba Insights',
    tag: 'Health',
    type: 'Operational intelligence',
    description:
      'Actionable reporting that helps care teams turn service data into better daily decisions.',
    impact: 'Designed for resilient operations',
    color: 'from-rose-500 via-violet-500 to-blue-700',
  },
  {
    name: 'LearnGrid',
    tag: 'Education',
    type: 'School operations suite',
    description:
      'A connected system for enrolment, payments, attendance and reporting across school networks.',
    impact: 'Built for growing institutions',
    color: 'from-emerald-500 via-teal-500 to-sky-700',
  },
  {
    name: 'ValidSMS',
    tag: 'Finance',
    type: 'Communications infrastructure',
    description:
      'A high-throughput communications platform with delivery correlation and enterprise controls.',
    impact: 'Reliable messages when they matter',
    color: 'from-orange-500 via-rose-500 to-violet-700',
  },
  {
    name: 'Afya Link',
    tag: 'Health',
    type: 'Digital health access',
    description:
      'A simple path between patients, care teams and essential service information.',
    impact: 'Made for low-friction access',
    color: 'from-cyan-500 via-blue-500 to-violet-700',
  },
  {
    name: 'CampusFlow',
    tag: 'Education',
    type: 'Student services platform',
    description:
      'A tailored digital experience for admissions, support and the student journey beyond the classroom.',
    impact: 'One view of the student experience',
    color: 'from-lime-500 via-emerald-500 to-teal-700',
  },
]

export const projectTags: Array<'All' | ProjectTag> = [
  'All',
  'Finance',
  'Education',
  'Health',
]
