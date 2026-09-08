import { useState } from 'react'
import type { FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, Clock3, Mail, MessageCircle } from 'lucide-react'

export const Route = createFileRoute('/contact')({ component: Contact })

const nextSteps = [
  {
    icon: MessageCircle,
    title: 'Tell us the essentials',
    copy: 'What you are building, who it is for and the challenge behind it.',
  },
  {
    icon: Clock3,
    title: 'We review the fit',
    copy: 'We’ll look at your goals, timing and the best way to move forward.',
  },
  {
    icon: Mail,
    title: 'We get back to you',
    copy: 'Expect thoughtful questions and a practical next step.',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <p className="section-kicker">Let’s talk</p>
          <h1 className="page-title max-w-3xl">
            Tell us what you want to make easier.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Whether you have a brief, a problem to untangle or just the first
            outline of an idea, we’d like to hear it.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1220px] gap-8 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[.72fr_1.28fr]">
        <aside className="rounded-[1.5rem] bg-slate-950 p-7 text-white sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[.14em] text-sky-300">
            What happens next
          </p>
          <div className="mt-9 space-y-7">
            {nextSteps.map(({ icon: Icon, title, copy }) => (
              <div className="flex gap-4" key={title}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-400/15 text-sky-300">
                  <Icon size={20} />
                </span>
                <div>
                  <h2 className="font-semibold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
        <div
          id="quote-form"
          className="rounded-[1.5rem] border border-border bg-card p-6 sm:p-9"
        >
          {submitted ? (
            <div className="grid min-h-96 place-items-center text-center">
              <div>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 size={29} />
                </span>
                <h2 className="mt-6 font-[Poppins,sans-serif] text-3xl font-semibold">
                  Thanks—we’ve got it.
                </h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Your enquiry is ready for the Oleq team. We’ll use the details
                  you shared to come back with useful next questions.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 font-bold text-primary"
                >
                  Send another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div>
                <p className="section-kicker">Request a quote</p>
                <h2 className="mt-3 font-[Poppins,sans-serif] text-3xl font-semibold tracking-tight">
                  Give us the useful details.
                </h2>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="form-label">
                  Your name
                  <input
                    required
                    name="name"
                    className="form-input"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="form-label">
                  Work email
                  <input
                    required
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="jane@company.com"
                  />
                </label>
                <label className="form-label">
                  Organisation
                  <input
                    required
                    name="company"
                    className="form-input"
                    placeholder="Company name"
                  />
                </label>
                <label className="form-label">
                  Project area
                  <select required name="area" className="form-input">
                    <option value="">Select one</option>
                    <option>Finance</option>
                    <option>Education</option>
                    <option>Health</option>
                    <option>Another area</option>
                  </select>
                </label>
                <label className="form-label sm:col-span-2">
                  What would you like to build or improve?
                  <textarea
                    required
                    name="project"
                    rows={5}
                    className="form-input resize-y"
                    placeholder="A few lines about your goal, current situation and any timing that matters."
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Send quote request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
