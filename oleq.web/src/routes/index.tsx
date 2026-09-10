import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BadgeCheck, Building2, GraduationCap, Home, ShieldCheck } from 'lucide-react'
import ProjectCard from '#/components/ProjectCard'
import HeroSection from '#/components/home/hero-section'
import HowWeWork from '#/components/home/how-we-work'
import { projects } from '#/data/projects'

export const Route = createFileRoute('/')({ component: Home })

const industries = [
  {
    icon: ShieldCheck,
    number: '01',
    name: 'InsurTech',
    title: 'Modernizing insurance operations',
    copy: 'Membership management, billing, CRM, automation and reporting across web, mobile and USSD.',
    tags: 'Membership · Billing · CRM · Automation',
  },
  {
    icon: GraduationCap,
    number: '02',
    name: 'EdTech',
    title: 'Education that reaches more learners',
    copy: 'Low-bandwidth learning channels, AI tutoring, automated assessment and learner analytics built for scale.',
    tags: 'USSD · SMS · AI Tutoring · Analytics',
  },
  {
    icon: Home,
    number: '03',
    name: 'PropTech',
    title: 'Property operations, financially reconciled',
    copy: 'Property, tenant and lease management with billing, rent collection, maintenance and financial reporting.',
    tags: 'Tenants · Billing · Rent · Maintenance',
  },
  {
    icon: Building2,
    number: '04',
    name: 'Payments & FinTech',
    title: 'Financial infrastructure for African rails',
    copy: 'Mobile money, banks and cards behind reliable integration layers with monitoring, approvals and fraud controls.',
    tags: 'Mobile Money · Cards · Monitoring · Fraud',
  },
]

const testimonials = [
  {
    quote:
      'Oleq brought product clarity and engineering discipline to a genuinely complex operational challenge.',
    name: 'Amina K.',
    role: 'Chief Operations Officer',
    initials: 'AK',
  },
  {
    quote:
      'The team understood that a platform is only useful if the people behind it can run it confidently every day.',
    name: 'David M.',
    role: 'Programme Director',
    initials: 'DM',
  },
  {
    quote:
      'They asked the hard questions early, then delivered a system that feels simple for our teams and customers.',
    name: 'Njeri W.',
    role: 'Product Sponsor',
    initials: 'NW',
  },
]

function Home() {
  return (
    <div id="top">
      <HeroSection />

      <section className="overflow-hidden bg-background py-5 text-foreground">
        <div className="relative flex w-max animate-[marquee_24s_linear_infinite] items-center gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-[.14em] sm:gap-12">
          {[...Array(2)].flatMap(() => [
            'Digital product strategy',
            'Engineering & integration',
            'Operations & support',
            'Built for real work',
          ]).map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8 sm:gap-12">
              <span>{item}</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </section>

      <HowWeWork />

      <section id="industries" className="bg-background px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-305">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Industries</p>
            <h2 className="section-title mt-3">Four industries. One engineering standard.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              We build around the regulatory, operational and scale demands of the
              industries we know best — with the same engineering discipline underneath.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {industries.map(({ icon: Icon, number, name, title, copy, tags }) => (
              <article
                key={name}
                className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </span>
                  <span className="font-mono text-xs font-bold text-muted-foreground">{number}</span>
                </div>
                <p className="mt-7 text-sm font-bold uppercase tracking-[.12em] text-primary">{name}</p>
                <h3 className="mt-3 font-[Poppins,sans-serif] text-2xl font-semibold leading-tight sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
                <p className="mt-7 border-t border-border pt-5 text-xs font-bold uppercase tracking-[.1em] text-muted-foreground">
                  {tags}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-28 dark:bg-slate-900/60">
        <div className="mx-auto max-w-305 sm:px-8">
          <div className="flex flex-col gap-6 sm:items-end">
            <div className="mx-auto w-full max-w-2xl text-center">
              <h2 className="section-title">Projects, built around real work.</h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Explore a sample of the digital products and operating platforms
                Oleq has helped bring to life.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-bold text-foreground no-underline transition hover:border-primary hover:text-primary"
            >
              View all projects <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-305 gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div className="text-center">
            <p className="section-kicker">Client perspective</p>
            <h2 className="section-title">Built to earn the trust of the teams who use it.</h2>
            <p className="mx-auto mt-5 max-w-md leading-7 text-muted-foreground">
              The best technology makes complex work feel more certain,
              connected and human.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-primary no-underline hover:text-accent"
            >
              Bring us your challenge <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex min-h-72 flex-col rounded-2xl border border-border bg-card p-6"
              >
                <blockquote className="text-[15px] leading-7 text-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-auto border-t border-border pt-5 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-900 text-xs font-bold text-white dark:bg-slate-700">
                      {testimonial.initials}
                    </span>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="mt-1 leading-5 text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-305 overflow-hidden rounded-4xl border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),linear-gradient(180deg,#071a2d_0%,#0b1f35_100%)] px-6 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] sm:px-12 sm:py-16">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-2 text-sm font-bold text-sky-300">
              <BadgeCheck size={19} /> Clear next steps, no obligation
            </div>
            <h2 className="font-[Poppins,sans-serif] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Have a complex business problem? Let&apos;s build the technology to solve it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
              Tell us what you need, where you are now and when you need to move.
              We&apos;ll come back with useful questions and a practical next step.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-300 px-6 py-3.5 font-bold text-slate-950 no-underline shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Talk to Oleq <ArrowRight size={18} />
            </Link>
          </div>
          <div className="pointer-events-none absolute -bottom-60 -right-24 h-132 w-132 rounded-full border-70 border-sky-400/10" />
        </div>
      </section>
    </div>
  )
}
