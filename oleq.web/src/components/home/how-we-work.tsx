import { useState } from 'react'
import {
  BrainCircuit,
  ChartNoAxesCombined,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const capabilities = [
  {
    icon: Workflow,
    title: 'End-to-end delivery',
    copy: 'From the first product sketch to dependable day-to-day operations.',
    detail:
      'We stay in the room from the earliest sketch through to the systems that keep things running — so nothing gets lost in a handoff between teams who never actually talk to each other.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for trust',
    copy: 'Financial-grade thinking around reliability, data and security.',
    detail:
      'Every system is built with the assumption that it will be trusted with something that matters — access control, data handling and failure modes get the same scrutiny as the feature itself.',
  },
  {
    icon: BrainCircuit,
    title: 'Intelligence inside',
    copy: 'Practical AI and automation embedded where work actually happens.',
    detail:
      'Automation goes where it removes real friction — inside the workflow, not bolted on as a separate chatbot nobody opens.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Designed to grow',
    copy: 'Systems shaped for the next market, milestone and million users.',
    detail:
      'Architecture decisions are made with the next stage in mind, so scaling up is a configuration change more often than it is a rebuild.',
  },
]

export default function HowWeWork() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-28 dark:bg-slate-900/70">
      <div className="mx-auto max-w-305">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">How we work</p>
          <h2 className="section-title mt-3">
            A technology company, not a software shop.

          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            We bring product, engineering, data and operational thinking
            together—so the result is useful after launch, not just impressive
            on launch day. We work closely with the people behind the process,
            turning complex needs into clear, dependable progress. Every stage
            stays connected, from the first question to the finished system.
          </p>
        </div>

        <div className="mt-14">
          <div className="grid max-w-305 gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            <div className="max-w-sm">
              <p className="section-kicker">Our approach</p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                We stay close to the problem, work in clear stages, and build
                systems people can confidently use every day.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs font-bold uppercase tracking-[.12em]">
                <span className="rounded-full bg-sky-100 px-3 py-2 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300">
                  Listen
                </span>
                <span className="rounded-full bg-sky-100 px-3 py-2 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300">
                  Shape
                </span>
                <span className="rounded-full bg-sky-100 px-3 py-2 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300">
                  Deliver
                </span>
              </div>
            </div>

            <div className="relative min-h-130 sm:min-h-140">
              <div className="relative ml-auto min-h-130 max-w-3xl sm:min-h-140">
                {capabilities.map((capability, index) => {
                  const CardIcon = capability.icon
                  const isActive = index === active
                  const distance =
                    (active - index + capabilities.length) % capabilities.length

                  return (
                    <button
                      key={capability.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`absolute left-0 right-0 mx-auto flex min-h-52 max-w-xl items-start gap-5 rounded-2xl border bg-slate-950 px-5 pb-10 pt-8 text-left text-white shadow-xl shadow-slate-950/20 transition-all duration-500 ease-out sm:min-h-64 sm:px-8 ${
                        isActive
                          ? 'z-20 border-sky-300/50 shadow-2xl shadow-sky-950/20'
                          : 'border-white/15 hover:border-sky-300/40'
                      }`}
                      style={{
                        top: `${(capabilities.length - 1 - distance) * 68}px`,
                        zIndex: capabilities.length - distance,
                        transform: `translateX(${distance * 16}px) scale(${isActive ? 1.08 : 1 - distance * 0.025})`,
                        opacity: Math.max(0.55, 1 - distance * 0.1),
                      }}
                      aria-pressed={isActive}
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-300/10 text-sky-300 sm:h-14 sm:w-14">
                        <CardIcon size={24} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-xs font-bold text-slate-400">
                          0{index + 1}
                        </span>
                        <span className="block font-[Poppins,sans-serif] text-lg font-semibold sm:text-xl">
                          {capability.title}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-slate-300">
                          {capability.copy}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
