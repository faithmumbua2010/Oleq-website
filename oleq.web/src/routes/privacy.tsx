import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({ component: Privacy })

function Privacy() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="section-kicker">Legal</p>
      <h1 className="page-title mt-3">Privacy Policy</h1>
      <div className="mt-10 space-y-10 leading-7 text-muted-foreground">
        <div>
          <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
            Privacy statement
          </h2>
          <p className="mt-4">
            This Privacy Policy outlines how OLEQ collects, uses, and protects
            the personal information of users (&quot;you&quot; or
            &quot;users&quot;) of our property management system (&quot;the
            System&quot;). We are committed to safeguarding your privacy and
            ensuring the security of your personal information. By accessing or
            using our System, you consent to the collection, use, and disclosure
            of your personal information as described in this Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
            Definitions
          </h2>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="font-bold text-foreground">Personal Data</dt>
              <dd>
                Personal information that can be associated with an identified
                or identifiable person, such as a name, mobile or telephone
                number, email address, payment card numbers, or official
                identification information such as an identification number.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-foreground">Device Information</dt>
              <dd>
                Data automatically collected from any device used to access our
                Sites or Services. This may include your device type, device ID,
                device name, IP address, browser, network connections, and
                internet connection.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-foreground">Process</dt>
              <dd>
                Any operation performed on personal data, whether automated or
                not, including collection, recording, organisation, storage,
                retrieval, use, disclosure, restriction, erasure, or
                destruction.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-foreground">Services</dt>
              <dd>
                Any products, services, content, features, technologies,
                functions, websites, applications, and related services offered
                to you by OLEQ.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-foreground">User</dt>
              <dd>
                An individual who uses the Services or accesses the Sites,
                including websites, mobile apps, and official social media
                platforms through which OLEQ offers the Services.
              </dd>
            </div>
          </dl>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
              Information we collect
            </h2>
            <p className="mt-4">
              <strong className="text-foreground">Personal Information:</strong>{' '}
              We may collect personal information such as your name, contact
              details, email address, and payment information when you create an
              account or interact with our System.
            </p>
            <p className="mt-4">
              <strong className="text-foreground">Property Information:</strong>{' '}
              We may collect information related to the properties you manage,
              including property addresses, tenant information, lease
              agreements, and maintenance requests.
            </p>
          </div>

          <div>
            <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
              Use of personal information
            </h2>
            <p className="mt-4">
              We use your personal information to provide and improve our
              services, personalise your user experience, communicate with you,
              process payments, and respond to enquiries.
            </p>
            <p className="mt-4">
              We may use your information to send promotional materials,
              updates, or newsletters related to our System. You can opt out of
              these communications at any time.
            </p>
            <p className="mt-4">
              We may use aggregated and anonymised data for analytical and
              statistical purposes to enhance our System and improve our
              services.
            </p>
          </div>

          <div>
            <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
              Sharing of personal information
            </h2>
            <p className="mt-4">
              We may share your personal information with third-party service
              providers who assist us in delivering our services, such as
              payment processors, hosting providers, and customer support.
            </p>
            <p className="mt-4">
              We may disclose your personal information if required by law or to
              protect our rights, property, or safety, or the rights, property,
              or safety of others.
            </p>
            <p className="mt-4">
              In the event of a merger, acquisition, or sale of all or a portion
              of our business, your personal information may be transferred to
              the acquiring entity.
            </p>
          </div>

          <div>
            <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
              Data security
            </h2>
            <p className="mt-4">
              We implement appropriate security measures to protect your
              personal information from unauthorised access, disclosure,
              alteration, or destruction. However, no data transmission or
              storage system can guarantee 100% security, so we cannot guarantee
              the absolute security of your information.
            </p>
          </div>

          <div>
            <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
              Your rights
            </h2>
            <p className="mt-4">
              You have the right to access, correct, or delete your personal
              information. You may also request restrictions on processing or
              object to certain processing activities.
            </p>
            <p className="mt-4">
              You may manage your communication preferences and opt out of
              promotional emails by following the instructions in our
              communications.
            </p>
          </div>

          <div>
            <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
              Retention of data
            </h2>
            <p className="mt-4">
              We retain personal data only for as long as reasonably necessary
              to fulfil the purposes for which it was collected, including
              legal, regulatory, tax, accounting, or reporting requirements.
            </p>
          </div>

          <div>
            <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">
              Updates to this Privacy Policy
            </h2>
            <p className="mt-4">
              We reserve the right to update this Privacy Policy at any time.
              Changes will be effective immediately upon posting on our website.
              We encourage you to review this Privacy Policy periodically.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 text-foreground">
          <h2 className="font-[Poppins,sans-serif] text-2xl font-semibold">
            Contact us
          </h2>
          <p className="mt-4">
            For questions, concerns, or requests regarding your personal
            information, contact us at{' '}
            <a href="mailto:info@oleq.co">info@oleq.co</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
