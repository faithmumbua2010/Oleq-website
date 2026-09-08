import HeroSection from '#/components/home/hero-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div id="top">
      <HeroSection />

      <section
        className="section py-[120px] max-[680px]:py-20 relative"
        id="who"
      >
        <div className="wrap max-w-[1220px] mx-auto px-8 max-[680px]:px-5 who-grid grid grid-cols-[.9fr_1.1fr] gap-[70px] items-start max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <div className="">
            <div className="eyebrow font-mono text-[12.5px] tracking-[0.14em] uppercase text-primary flex items-center gap-2.5 mb-[18px]">
              <span className="w-[18px] h-px bg-primary shrink-0"></span>Who we
              are
            </div>
            <h2 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(26px,3vw,36px)] mb-5">
              A technology company, not a software shop.
            </h2>
            <p className="text-muted-foreground text-base">
              Oleq is an African technology company that builds and operates
              insurers, education networks, property portfolios and payment
              providers. We combine software engineering, payments
              infrastructure, AI, automation and data into systems designed to
              run, not just launch.
            </p>
            <div className="capability-list flex flex-wrap gap-2.5 mt-7">
              <span className="chip px-4 py-2.5 border border-border rounded-full text-[13.5px] text-muted-foreground font-mono">
                Software Engineering
              </span>
              <span className="chip px-4 py-2.5 border border-border rounded-full text-[13.5px] text-muted-foreground font-mono">
                Payments
              </span>
              <span className="chip px-4 py-2.5 border border-border rounded-full text-[13.5px] text-muted-foreground font-mono">
                Artificial Intelligence
              </span>
              <span className="chip px-4 py-2.5 border border-border rounded-full text-[13.5px] text-muted-foreground font-mono">
                Automation
              </span>
              <span className="chip px-4 py-2.5 border border-border rounded-full text-[13.5px] text-muted-foreground font-mono">
                Data &amp; Analytics
              </span>
              <span className="chip px-4 py-2.5 border border-border rounded-full text-[13.5px] text-muted-foreground font-mono">
                Enterprise Integrations
              </span>
              <span className="chip px-4 py-2.5 border border-border rounded-full text-[13.5px] text-muted-foreground font-mono">
                Digital Channels
              </span>
            </div>
          </div>
          <div className="">
            <div className="pipeline mt-11 flex flex-col">
              <div className="pipeline-step flex items-center gap-5 py-[15px] border-b border-dashed border-border last:border-b-0">
                <span className="idx font-mono text-xs text-primary w-[26px] shrink-0">
                  01
                </span>
                <span className="label font-['Poppins'] font-semibold text-[15.5px]">
                  Concept
                </span>
              </div>
              <div className="pipeline-step flex items-center gap-5 py-[15px] border-b border-dashed border-border last:border-b-0">
                <span className="idx font-mono text-xs text-primary w-[26px] shrink-0">
                  02
                </span>
                <span className="label font-['Poppins'] font-semibold text-[15.5px]">
                  Product design
                </span>
              </div>
              <div className="pipeline-step flex items-center gap-5 py-[15px] border-b border-dashed border-border last:border-b-0">
                <span className="idx font-mono text-xs text-primary w-[26px] shrink-0">
                  03
                </span>
                <span className="label font-['Poppins'] font-semibold text-[15.5px]">
                  Engineering
                </span>
              </div>
              <div className="pipeline-step flex items-center gap-5 py-[15px] border-b border-dashed border-border last:border-b-0">
                <span className="idx font-mono text-xs text-primary w-[26px] shrink-0">
                  04
                </span>
                <span className="label font-['Poppins'] font-semibold text-[15.5px]">
                  Integration
                </span>
              </div>
              <div className="pipeline-step flex items-center gap-5 py-[15px] border-b border-dashed border-border last:border-b-0">
                <span className="idx font-mono text-xs text-primary w-[26px] shrink-0">
                  05
                </span>
                <span className="label font-['Poppins'] font-semibold text-[15.5px]">
                  Deployment
                </span>
              </div>
              <div className="pipeline-step flex items-center gap-5 py-[15px] border-b border-dashed border-border last:border-b-0">
                <span className="idx font-mono text-xs text-primary w-[26px] shrink-0">
                  06
                </span>
                <span className="label font-['Poppins'] font-semibold text-[15.5px]">
                  Support
                </span>
              </div>
              <div className="pipeline-step flex items-center gap-5 py-[15px] border-b border-dashed border-border last:border-b-0">
                <span className="idx font-mono text-xs text-primary w-[26px] shrink-0">
                  07
                </span>
                <span className="label font-['Poppins'] font-semibold text-[15.5px]">
                  Analytics
                </span>
              </div>
              <div className="pipeline-step flex items-center gap-5 py-[15px] border-b border-dashed border-border last:border-b-0">
                <span className="idx font-mono text-xs text-primary w-[26px] shrink-0">
                  08
                </span>
                <span className="label font-['Poppins'] font-semibold text-[15.5px]">
                  Continuous improvement
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section py-[120px] max-[680px]:py-20 relative section-alt bg-background border-y border-border"
        id="platforms"
      >
        <div className="wrap max-w-[1220px] mx-auto px-8 max-[680px]:px-5">
          <div className="section-head max-w-[680px] mb-16 ">
            <div className="eyebrow font-mono text-[12.5px] tracking-[0.14em] uppercase text-primary flex items-center gap-2.5 mb-[18px]">
              <span className="w-[18px] h-px bg-primary shrink-0"></span>In
              production
            </div>
            <h2 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(28px,3.2vw,42px)] mb-[18px]">
              Platforms Oleq has built and operates today
            </h2>
            <p className="m-0 text-[17px] text-muted-foreground">
              Not concepts — live systems processing real transactions, messages
              and tenants across East Africa.
            </p>
          </div>
          <div className="platform-strip grid grid-cols-4 gap-px bg-border border border-border rounded-[14px] overflow-hidden max-[960px]:grid-cols-2 max-[680px]:grid-cols-1">
            <div className="platform-cell bg-card p-[30px_26px] min-h-[190px] flex flex-col justify-between transition-colors duration-300 hover:bg-muted ">
              <div>
                <span className="font-mono text-[10.5px] text-accent uppercase tracking-[0.08em]">
                  Communications
                </span>
                <p className="pname font-['Poppins'] font-semibold text-[18px] mt-2 mb-1.5">
                  ValidSMS
                </p>
                <p className="text-[13.5px] text-muted-foreground leading-[1.55]">
                  A bulk messaging platform processing per-sender queues at
                  scale, with delivery-receipt correlation and enterprise
                  accounting.
                </p>
              </div>
            </div>
            <div className="platform-cell bg-card p-[30px_26px] min-h-[190px] flex flex-col justify-between transition-colors duration-300 hover:bg-muted ">
              <div>
                <span className="ptag font-mono text-[10.5px] text-accent uppercase tracking-[0.08em]">
                  PropTech
                </span>
                <p className="pname font-['Poppins'] font-semibold text-[18px] mt-2 mb-1.5">
                  Silqu
                </p>
                <p className="pdesc text-[13.5px] text-muted-foreground leading-[1.55]">
                  Property management SaaS covering tenants, billing, investor
                  units and financial reporting for portfolio operators.
                </p>
              </div>
            </div>
            <div className="platform-cell bg-card p-[30px_26px] min-h-[190px] flex flex-col justify-between transition-colors duration-300 hover:bg-muted ">
              <div>
                <span className="ptag font-mono text-[10.5px] text-accent uppercase tracking-[0.08em]">
                  CPaaS
                </span>
                <p className="pname font-['Poppins'] font-semibold text-[18px] mt-2 mb-1.5">
                  OleComms
                </p>
                <p className="pdesc text-[13.5px] text-muted-foreground leading-[1.55]">
                  A modular communications platform architecture spanning SMS,
                  messaging and event-driven domain services.
                </p>
              </div>
            </div>
            <div className="platform-cell bg-card p-[30px_26px] min-h-[190px] flex flex-col justify-between transition-colors duration-300 hover:bg-muted ">
              <div>
                <span className="ptag font-mono text-[10.5px] text-accent uppercase tracking-[0.08em]">
                  Membership
                </span>
                <p className="pname font-['Poppins'] font-semibold text-[18px] mt-2 mb-1.5">
                  Kava
                </p>
                <p className="pdesc text-[13.5px] text-muted-foreground leading-[1.55]">
                  Membership and billing management with deadlock-safe batch
                  operations, built for high-volume group finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section py-[120px] max-[680px]:py-20 relative section-alt bg-background border-y border-border"
        id="technology"
      >
        <div className="wrap max-w-[1220px] mx-auto px-8 max-[680px]:px-5">
          <div className="section-head max-w-[680px] mb-16 ">
            <div className="eyebrow font-mono text-[12.5px] tracking-[0.14em] uppercase text-primary flex items-center gap-2.5 mb-[18px]">
              <span className="w-[18px] h-px bg-primary shrink-0"></span>
              Technology
            </div>
            <h2 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(28px,3.2vw,42px)] mb-[18px]">
              Engineering built for national-scale load
            </h2>
            <p className="m-0 text-[17px] text-muted-foreground">
              Systems designed for millions of users and high transaction
              volumes — not proofs of concept that break under real traffic.
            </p>
          </div>
          <div className="tech-grid grid grid-cols-3 border-t border-l border-border max-[960px]:grid-cols-2 max-[680px]:grid-cols-1 ">
            <div className="tech-cell border-r border-b border-border p-[26px_28px]">
              <span className="mono font-mono">Applications</span>
              <p className="m-0">
                Web, mobile, USSD and SMS applications built for low-bandwidth
                and high-density markets alike.
              </p>
            </div>
            <div className="tech-cell border-r border-b border-border p-[26px_28px]">
              <span className="mono font-mono">Integrations</span>
              <p className="m-0">
                APIs, banking and mobile-money integrations, connecting core
                systems to the rails that move money.
              </p>
            </div>
            <div className="tech-cell border-r border-b border-border p-[26px_28px]">
              <span className="mono font-mono">Infrastructure</span>
              <p className="m-0">
                Cloud infrastructure and databases engineered for uptime, not
                just launch-day demos.
              </p>
            </div>
            <div className="tech-cell border-r border-b border-border p-[26px_28px]">
              <span className="mono font-mono">Data</span>
              <p className="m-0">
                Data engineering and analytics pipelines that turn transaction
                volume into operational insight.
              </p>
            </div>
            <div className="tech-cell border-r border-b border-border p-[26px_28px]">
              <span className="mono font-mono">Intelligence</span>
              <p className="m-0">
                Artificial intelligence and automation embedded directly into
                product workflows.
              </p>
            </div>
            <div className="tech-cell border-r border-b border-border p-[26px_28px]">
              <span className="mono font-mono">Security</span>
              <p className="m-0">
                Security practices built around financial-grade data — because
                our platforms move money.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section py-[120px] max-[680px]:py-20 relative"
        id="why"
      >
        <div className="wrap max-w-[1220px] mx-auto px-8 max-[680px]:px-5">
          <div className="section-head max-w-[680px] mb-16 ">
            <div className="eyebrow font-mono text-[12.5px] tracking-[0.14em] uppercase text-primary flex items-center gap-2.5 mb-[18px]">
              <span className="w-[18px] h-px bg-primary shrink-0"></span>Why
              Oleq
            </div>
            <h2 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(28px,3.2vw,42px)] mb-[18px]">
              Six reasons enterprises choose us
            </h2>
          </div>
          <div className="why-grid grid grid-cols-3 gap-[26px] max-[960px]:grid-cols-2 max-[680px]:grid-cols-1">
            <div className="why-card ">
              <span className="num font-mono text-[13px] text-muted-foreground mb-4 block">
                01
              </span>
              <h3 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[19px] mb-2.5">
                Proven at scale
              </h3>
              <p className="m-0">
                Technology already serving millions of users in production, not
                pilot.
              </p>
            </div>
            <div className="why-card ">
              <span className="num font-mono text-[13px] text-muted-foreground mb-4 block">
                02
              </span>
              <h3 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[19px] mb-2.5">
                African experience
              </h3>
              <p className="m-0">
                Platforms operating across multiple African markets and
                regulatory environments.
              </p>
            </div>
            <div className="why-card ">
              <span className="num font-mono text-[13px] text-muted-foreground mb-4 block">
                03
              </span>
              <h3 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[19px] mb-2.5">
                Industry expertise
              </h3>
              <p className="m-0">
                Deep, specific experience in insurance, education, property and
                payments.
              </p>
            </div>
            <div className="why-card ">
              <span className="num font-mono text-[13px] text-muted-foreground mb-4 block">
                04
              </span>
              <h3 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[19px] mb-2.5">
                End-to-end capability
              </h3>
              <p className="m-0">
                Product, engineering, integrations, payments, AI, analytics and
                support — one organization.
              </p>
            </div>
            <div className="why-card ">
              <span className="num font-mono text-[13px] text-muted-foreground mb-4 block">
                05
              </span>
              <h3 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[19px] mb-2.5">
                Payments expertise
              </h3>
              <p className="m-0">
                Real-world experience building payment platforms and gateway
                infrastructure that moves money daily.
              </p>
            </div>
            <div className="why-card ">
              <span className="num font-mono text-[13px] text-muted-foreground mb-4 block">
                06
              </span>
              <h3 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[19px] mb-2.5">
                Built for growth
              </h3>
              <p className="m-0">
                Technology designed to scale as your users, transactions and
                markets grow.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="vision text-center py-[130px] relative bg-[radial-gradient(900px_400px_at_50%_0%,color-mix(in_oklch,var(--accent)_15%,transparent),transparent_60%)]"
        id="vision"
      >
        <div className="wrap max-w-[1220px] mx-auto px-8 max-[680px]:px-5 ">
          <div className="eyebrow font-mono text-[12.5px] tracking-[0.14em] uppercase text-primary flex items-center gap-2.5 mb-[18px]">
            LET'S BUILD TOGETHER
          </div>
          <h2 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(28px,3.2vw,42px)] mb-[18px]">
            Build software that grows with your business.
          </h2>
          <div className="vision-mission max-w-[640px] mx-auto mt-9 px-[34px] py-[26px] border border-border rounded-[14px] font-['Poppins'] text-[18px] text-muted-foreground font-medium">
            Tell us what you're working on — whether it's a new product, a
            system that needs rebuilding, or an idea you haven't started yet.
            We'd love to hear about it.
          </div>
          <div className="mt-[34px]">
            <a
              href="contact.html"
              className="btn inline-flex items-center gap-2.5 px-[26px] py-3.5 rounded-full font-['Poppins'] font-semibold text-[15px] cursor-pointer border border-transparent transition-all duration-300 whitespace-nowrap btn-primary bg-gradient-to-r from-primary to-accent text-primary-foreground hover:-translate-y-0.5 hover:from-accent hover:to-primary"
            >
              Get in touch
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section
        className="section py-[120px] max-[680px]:py-20 relative section-alt bg-background border-y border-border"
        id="faq"
      >
        <div className="wrap max-w-[1220px] mx-auto px-8 max-[680px]:px-5">
          <div className="section-head max-w-[680px] mb-14 mx-auto text-center ">
            <div className="eyebrow font-mono text-[12.5px] tracking-[0.14em] uppercase text-primary flex items-center gap-2.5 mb-[18px]">
              Common questions
            </div>
            <h2 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(28px,3.2vw,42px)] mb-[18px]">
              Before you talk to us
            </h2>
          </div>
          <div className="faq max-w-[820px] mx-auto ">
            <div className="faq-item border-b border-border py-[22px]">
              <div className="faq-q flex items-center justify-between gap-5 cursor-pointer">
                <h4 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em]">
                  Does Oleq build custom platforms, or only integrate existing
                  products?
                </h4>
                <span className="plus w-[22px] h-[22px] shrink-0 flex items-center justify-center text-[22px] leading-none text-muted-foreground"></span>
              </div>
              <div className="faq-a max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out">
                <p className="m-0">
                  Both. We build platforms from the ground up where none exist,
                  and integrate into your existing core systems where they do —
                  the same engineering team handles both paths.
                </p>
              </div>
            </div>
            <div className="faq-item border-b border-border py-[22px]">
              <div className="faq-q flex items-center justify-between gap-5 cursor-pointer">
                <h4 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em]">
                  Which African markets can the payment gateway reach?
                </h4>
                <span className="plus w-[22px] h-[22px] shrink-0 flex items-center justify-center text-[22px] leading-none text-muted-foreground"></span>
              </div>
              <div className="faq-a max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out">
                <p className="m-0">
                  The gateway is live across 12 African countries, covering
                  mobile money, banks and card networks through a single
                  integration.
                </p>
              </div>
            </div>
            <div className="faq-item border-b border-border py-[22px]">
              <div className="faq-q flex items-center justify-between gap-5 cursor-pointer">
                <h4 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em]">
                  Do you support institutions after launch?
                </h4>
                <span className="plus w-[22px] h-[22px] shrink-0 flex items-center justify-center text-[22px] leading-none text-muted-foreground"></span>
              </div>
              <div className="faq-a max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out">
                <p className="m-0">
                  Yes. Support, analytics and continuous improvement are part of
                  every engagement — we operate what we build, not just hand it
                  over.
                </p>
              </div>
            </div>
            <div className="faq-item border-b border-border py-[22px]">
              <div className="faq-q flex items-center justify-between gap-5 cursor-pointer">
                <h4 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em]">
                  What size of institution do you typically work with?
                </h4>
                <span className="plus w-[22px] h-[22px] shrink-0 flex items-center justify-center text-[22px] leading-none text-muted-foreground"></span>
              </div>
              <div className="faq-a max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out">
                <p className="m-0">
                  From growing platforms to institutions processing millions of
                  transactions — our systems are built to scale with you rather
                  than be replaced at your next growth stage.
                </p>
              </div>
            </div>
            <div className="faq-item border-b border-border py-[22px]">
              <div className="faq-q flex items-center justify-between gap-5 cursor-pointer">
                <h4 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em]">
                  Can Oleq work alongside our existing engineering team?
                </h4>
                <span className="plus w-[22px] h-[22px] shrink-0 flex items-center justify-center text-[22px] leading-none text-muted-foreground"></span>
              </div>
              <div className="faq-a max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out">
                <p className="m-0">
                  Regularly. We integrate with in-house teams on specific
                  modules, or take ownership of full platform delivery —
                  whichever fits how you operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section py-[110px] text-center border-t border-border">
        <div className="wrap max-w-[1220px] mx-auto px-8 max-[680px]:px-5 ">
          <div className="eyebrow font-mono text-[12.5px] tracking-[0.14em] uppercase text-primary flex items-center gap-2.5 mb-[18px]">
            <span className="w-[18px] h-px bg-primary shrink-0"></span>Let's
            build what's next
          </div>
          <h2 className="font-[Poppins,sans-serif] font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(28px,3.2vw,42px)] mb-[18px]">
            Have a complex business problem?
            <br />
            Let's build the technology to solve it.
          </h2>
          <div className="cta-btns flex flex-wrap justify-center gap-4 mb-[60px]">
            <a
              href="contact.html"
              className="btn inline-flex items-center gap-2.5 px-[26px] py-3.5 rounded-full font-['Poppins'] font-semibold text-[15px] cursor-pointer border border-transparent transition-all duration-300 whitespace-nowrap btn-primary bg-gradient-to-r from-primary to-accent text-primary-foreground hover:-translate-y-0.5 hover:from-accent hover:to-primary"
            >
              Talk to Oleq
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="about.html"
              className="btn inline-flex items-center gap-2.5 px-[26px] py-3.5 rounded-full font-['Poppins'] font-semibold text-[15px] cursor-pointer border border-transparent transition-all duration-300 whitespace-nowrap btn-ghost border-border text-foreground hover:border-muted-foreground hover:-translate-y-0.5"
            >
              Meet the team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
