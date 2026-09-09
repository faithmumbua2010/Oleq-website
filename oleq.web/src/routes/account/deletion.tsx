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
          If you hold an account with an OLEQ-operated service and want your
          associated data deleted, email{' '}
          <a href="mailto:info@oleq.co?subject=Account%20deletion%20request">
            info@oleq.co
          </a>{' '}
          with the subject “Account deletion request”.
        </p>
        <p>
          Include the service name and the email address or phone number used
          for the account. We may need to verify your identity before acting on
          a request.
        </p>
        <p>
          We will delete the account data covered by your request unless we are
          required to retain specific information by law or for legitimate
          legal, regulatory, tax, accounting, or reporting obligations.
        </p>
        <p className="rounded-2xl border border-border bg-card p-6 text-foreground">
          You can also contact us through the{' '}
          <a href="mailto:info@oleq.co">privacy contact</a> for questions about
          this process.
        </p>
      </div>
    </section>
  )
}
