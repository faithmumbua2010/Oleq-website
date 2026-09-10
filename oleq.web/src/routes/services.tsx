import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  Bot,
  Cable,
  ChartNoAxesCombined,
  Check,
  Layers3,
  Palette,
  ServerCog,
} from 'lucide-react'

export const Route = createFileRoute('/services')({ component: Services })

const services = [
  { icon: Palette, number: '01', title: 'Product strategy & design', copy: 'Before we build, we make sure we are solving the right problem. We turn complex business needs into a clear product direction, practical user journeys and interfaces people can actually use.', points: ['Product discovery', 'UX & UI design', 'User journeys', 'Technical planning'] },
  { icon: Layers3, number: '02', title: 'Platform engineering', copy: 'We build the core systems that keep your operations moving — from customer-facing applications to internal platforms, APIs and the infrastructure connecting them.', points: ['Web & mobile platforms', 'Backend systems', 'APIs & architecture', 'Scalable infrastructure'] },
  { icon: Cable, number: '03', title: 'Integrations & payments', copy: 'Modern businesses rarely run on one system. We connect the services you already depend on and build reliable payment flows across mobile money, banks, cards and other rails.', points: ['Payment integrations', 'Bank & mobile money', 'Third-party APIs', 'Reconciliation flows'] },
  { icon: Bot, number: '04', title: 'Data, AI & automation', copy: 'We turn operational data into something useful. From intelligent workflows to AI-powered experiences, we automate repetitive work and help teams make better decisions.', points: ['AI-powered products', 'Workflow automation', 'Analytics & reporting', 'Decision support'] },
  { icon: ServerCog, number: '05', title: 'Operate & improve', copy: 'Launching is not the finish line. We help teams keep their systems reliable, understand what is happening and continuously improve the experience as the organisation evolves.', points: ['Monitoring & support', 'Performance improvement', 'Product analytics', 'Continuous delivery'] },
]

const industries = [
  { id: 'insurtech', number: '01', title: 'InsurTech', copy: 'Digital infrastructure for membership, billing, CRM, reporting and customer experiences across web, mobile and USSD.' },
  { id: 'edtech', number: '02', title: 'EdTech', copy: 'Learning platforms and intelligent tools designed to reach more learners, including those on low-bandwidth channels.' },
  { id: 'proptech', number: '03', title: 'PropTech', copy: 'Connected property operations covering tenants, units, leases, billing, rent collection, maintenance and reporting.' },
  { id: 'payments', number: '04', title: 'Payments & FinTech', copy: 'Reliable financial infrastructure connecting mobile money, banks and cards with monitoring, controls and reconciliation.' },
]

const principles = [
  'We start with the business problem, not the technology.',
  'We design for the people who will use and operate the system every day.',
  'We build for African connectivity, payment rails and operational realities.',
  'We stay involved after launch so the product can keep getting better.',
]

function Services() {
  return (
    <div>
      <section className="page-hero">
        <div className="container wrap relative text-center services-hero-animate">
          <p className="section-kicker justify-center services-hero-item services-hero-kicker">What we do</p>
          <h1 className="page-title mx-auto max-w-4xl services-hero-item services-hero-title">
            We build the digital <span className="whitespace-nowrap">infrastructure</span> behind ambitious organisations.
          </h1>
          <p className="hero-sub mx-auto mt-6 max-w-3xl services-hero-item services-hero-copy">
            Strategy is only useful when it becomes something people can use. Oleq brings product thinking, engineering, payments, AI and ongoing operations together to turn complex business needs into dependable digital systems.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 services-hero-item services-hero-actions">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground no-underline transition hover:bg-accent hover:text-accent-foreground">
              Start a conversation <ArrowRight size={18} />
            </Link>
            <a href="#delivery" className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3.5 font-bold text-foreground no-underline transition hover:border-primary hover:text-primary">
              Explore what we build
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="container !py-0">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-10">
              <p className="section-kicker">More than a build team</p>
              <h2 className="mt-4 max-w-2xl font-[Poppins,sans-serif] text-3xl font-semibold leading-tight sm:text-4xl">The hard part is making everything work together.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">A beautiful interface is not enough. A platform has to fit your operations, connect to existing systems, survive real-world constraints and give your teams confidence. That is where we focus.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 text-foreground shadow-xl shadow-foreground/5 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Our approach</p>
              <p className="mt-5 text-xl font-medium leading-8 text-foreground sm:text-2xl">Understand the problem → design the system → build the product → connect the ecosystem → keep improving it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/50 sm:py-28" id="delivery">
        <div className="container !py-0">
          <div className="max-w-3xl">
            <p className="section-kicker">Our capabilities</p>
            <h2 className="section-title mt-3">From the first question to the system that runs the work.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Bring us a product idea, a broken workflow, a system that needs connecting or a business that has outgrown its current tools. We can work from strategy through engineering and operations.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map(({ icon: Icon, number, title, copy, points }) => (
              <article key={title} className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl sm:p-9">
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><Icon size={24} /></span>
                  <span className="font-mono text-xs font-bold text-muted-foreground">{number}</span>
                </div>
                <h3 className="mt-8 font-[Poppins,sans-serif] text-2xl font-semibold sm:text-3xl">{title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {points.map((point) => <span key={point} className="flex items-center gap-2 text-sm font-medium"><Check size={15} className="shrink-0 text-primary" />{point}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="container !py-0">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div><p className="section-kicker">Why the details matter</p><h2 className="section-title mt-3">Technology should make the business stronger.</h2></div>
            <div className="grid gap-4">
              {principles.map((principle, index) => <div key={principle} className="flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{index + 1}</span><p className="leading-7">{principle}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/50 sm:py-28">
        <div className="container !py-0">
          <div className="max-w-3xl"><p className="section-kicker">Where we focus</p><h2 className="section-title mt-3">Deep industry context. Practical technology.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">We do not build generic software and hope it fits. Our work is shaped around the realities of insurance, education, property and financial services across Africa.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {industries.map(({ id, number, title, copy }) => <article key={id} id={id} className="rounded-3xl border border-border bg-background p-7 sm:p-9"><div className="flex items-center justify-between"><span className="font-mono text-xs font-bold text-primary">{number}</span><ChartNoAxesCombined size={20} className="text-muted-foreground" /></div><h3 className="mt-8 font-[Poppins,sans-serif] text-2xl font-semibold sm:text-3xl">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="container !py-0">
          <div className="relative mx-auto max-w-305 overflow-hidden rounded-4xl border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),linear-gradient(180deg,#071a2d_0%,#0b1f35_100%)] px-6 py-12 text-center text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:px-12 sm:py-16">
            <div className="relative z-10 mx-auto max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.14em] text-sky-300">Have something complex to solve?</p><h2 className="mt-4 font-[Poppins,sans-serif] text-3xl font-semibold leading-tight sm:text-4xl">Let&apos;s turn the problem into something that works.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">Tell us what you are trying to achieve, what is getting in the way and where you want to go. We&apos;ll help you find the most practical next step.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-300 px-6 py-3.5 font-bold text-slate-950 no-underline shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 hover:bg-white">Talk to Oleq <ArrowRight size={18} /></Link></div>
            <div className="pointer-events-none absolute -bottom-60 -right-24 h-132 w-132 rounded-full border-70 border-sky-400/10" />
          </div>
        </div>
      </section>
    </div>
  )
}
