import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({ component: Privacy })

function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="section-kicker">Privacy</p>
      <h1 className="page-title mt-3">Your information, handled with care.</h1>
      <div className="mt-10 space-y-7 leading-7 text-muted-foreground">
        <p>
          Oleq uses the details you provide through this website to respond to
          your enquiry and to understand how we can help. We do not sell
          personal information.
        </p>
        <p>
          When you contact us, we retain only the information needed to manage
          that conversation and any resulting client relationship. You can ask
          us about, correct or request deletion of your information by
          contacting the Oleq team.
        </p>
        <p className="rounded-2xl border border-border bg-card p-6 text-foreground">
          For privacy queries, include “Privacy” in your project enquiry and we
          will route it to the right person.
        </p>
      </div>
    </section>
  )
}
