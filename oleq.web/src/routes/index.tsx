import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ChartNoAxesCombined,
  Quote,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import ProjectCard from '#/components/ProjectCard'
import HeroSection from '#/components/home/hero-section'
import { projects } from '#/data/projects'

export const Route = createFileRoute('/')({ component: Home })

const capabilities = [
  {
    icon: Workflow,
    title: 'End-to-end delivery',
    copy: 'From the first product sketch to dependable day-to-day operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for trust',
    copy: 'Financial-grade thinking around reliability, data and security.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligence inside',
    copy: 'Practical AI and automation embedded where work actually happens.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Designed to grow',
    copy: 'Systems shaped for the next market, milestone and million users.',
  },
]

const testimonials = [
  {
    quote:
      'Oleq brought product clarity and engineering discipline to a genuinely complex operational challenge.',
    name: 'Operations leader',
    company: 'East African financial services business',
  },
  {
    quote:
      'The team understood that a platform is only useful if the people behind it can run it confidently every day.',
    name: 'Programme director',
    company: 'Regional education network',
  },
  {
    quote:
      'They asked the hard questions early, then delivered a system that feels simple for our teams and customers.',
    name: 'Product sponsor',
    company: 'Health services organisation',
  },
]

function Home() {
  return (
    <div id="top">
      <HeroSection />

      <section className="border-y border-border bg-card/60 py-8">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-center text-xs font-bold uppercase tracking-[.14em] text-muted-foreground sm:px-8">
          <span>Digital product strategy</span>
          <span className="hidden h-1 w-1 rounded-full bg-primary sm:block" />
          <span>Engineering &amp; integration</span>
          <span className="hidden h-1 w-1 rounded-full bg-primary sm:block" />
          <span>Operations &amp; support</span>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="section-kicker">How we work</p>
          <h2 className="section-title">
            A hands-on technology partner, from problem to progress.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
            We bring product, engineering, data and operational thinking
            together—so the result is useful after launch, not just impressive
            on launch day.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, copy }, index) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-sky-950/5"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-7 font-[Poppins,sans-serif] text-lg font-semibold">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/50 py-20 sm:py-28">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="section-kicker">Selected work</p>
              <h2 className="section-title">
                Six projects, built around real work.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Explore a sample of the digital products and operating platforms
                Oleq has helped bring to life.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-bold text-foreground no-underline transition hover:border-primary hover:text-primary"
            >
              View all projects <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="section-kicker">Client perspective</p>
            <h2 className="section-title">
              Built to earn the trust of the teams who use it.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
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
                key={testimonial.company}
                className="flex min-h-72 flex-col rounded-2xl border border-border bg-card p-6"
              >
                <Quote
                  className="text-primary"
                  size={27}
                  fill="currentColor"
                  fillOpacity=".12"
                />
                <blockquote className="mt-6 text-[15px] leading-7 text-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-auto border-t border-border pt-5 text-sm">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="mt-1 leading-5 text-muted-foreground">
                    {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 px-6 py-12 text-white shadow-2xl shadow-slate-950/20 sm:px-12 sm:py-16">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-bold text-sky-300">
              <BadgeCheck size={19} /> Clear next steps, no obligation
            </div>
            <h2 className="font-[Poppins,sans-serif] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Have a project in mind? Let’s shape the right approach—and a clear
              quote.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Tell us what you need, where you are now and when you need to
              move. We’ll come back with useful questions and a practical next
              step.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-300 px-6 py-3.5 font-bold text-slate-950 no-underline transition hover:-translate-y-0.5 hover:bg-white"
            >
              Request a project quote <ArrowRight size={18} />
            </Link>
          </div>
          <div className="pointer-events-none absolute -bottom-60 -right-24 h-[33rem] w-[33rem] rounded-full border-[70px] border-sky-400/10" />
        </div>
      </section>
    </div>
  )
}
