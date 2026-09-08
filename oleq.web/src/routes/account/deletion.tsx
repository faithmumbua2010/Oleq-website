import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/account/deletion')({
  component: AccountDeletion,
})

function AccountDeletion() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="section-kicker">Account deletion</p>
      <h1 className="page-title mt-3">Request account data deletion.</h1>
      <div className="mt-10 space-y-7 leading-7 text-muted-foreground">
        <p>
          If you hold an account with an Oleq-operated service and want
          associated data deleted, submit a request through our contact page
          with the service name and the email or phone number used for the
          account.
        </p>
        <p>
          We may need to verify your identity before acting on a request and
          will retain information where legally required.
        </p>
      </div>
    </section>
  )
}
