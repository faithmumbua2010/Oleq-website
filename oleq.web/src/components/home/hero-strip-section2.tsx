import CtaButton from '../common/cta-button'
import { Link } from '@tanstack/react-router'
import { Building2, GraduationCap, House, ShieldCheck } from 'lucide-react'

const bento = [
  { icon: ShieldCheck, label: 'InsurTech', stat: '500K+', unit: 'memberships managed' },
  { icon: GraduationCap, label: 'EdTech', stat: '4.9M+', unit: 'learners reached' },
  { icon: House, label: 'PropTech', stat: '12', unit: 'countries live' },
  { icon: Building2, label: 'Payments', stat: '12+ yrs', unit: 'in production' },
]

export default function HeroSection2() {
  return (
    <section className="hero relative overflow-hidden">
      <div className="container wrap relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow mb-4.5 flex items-center justify-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-primary">
            <span className="h-px w-4.5 shrink-0 bg-primary"></span>
            Digital infrastructure — built &amp; operated in Africa
          </div>
          <h1 className="mb-6 font-[Poppins,sans-serif] text-[clamp(38px,4.6vw,62px)] font-semibold leading-[1.08] tracking-[-0.01em]">
            Building intelligent digital infrastructure
            <span className="mt-2 block text-primary">for Africa.</span>
          </h1>
          <p className="hero-sub mx-auto mb-9.5 max-w-2xl text-[18px] text-muted-foreground">
            Oleq designs, builds and operates the platforms that run insurance,
            education, property and payments — combining engineering, AI and
            data into systems that hold up at national scale.
          </p>
          <div className="hero-ctas mb-16 flex flex-wrap justify-center gap-4">
            <CtaButton href="/contact" name="Talk to Oleq" />
            <Link
              to="/services"
              className="btn inline-flex items-center gap-2.5 rounded-full border border-transparent px-6.5 py-3.5 font-['Poppins'] text-[15px] font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-muted-foreground"
            >
              Explore our solutions
            </Link>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {bento.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-5 text-left shadow-[0_20px_40px_-25px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <p className="font-[Poppins,sans-serif] text-2xl font-semibold text-foreground">{item.stat}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.unit}</p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}