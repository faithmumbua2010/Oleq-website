import { ArrowUpRight, GraduationCap, HeartPulse, Landmark } from 'lucide-react'
import type { Project } from '#/data/projects'

const icons = {
  Finance: Landmark,
  Education: GraduationCap,
  Health: HeartPulse,
}

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.tag]

  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/10">
      <div
        className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color} p-6`}
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[18px] border-white/15" />
        <div className="absolute bottom-[-68px] left-10 h-36 w-36 rounded-[2rem] border border-white/20 bg-white/10 rotate-12" />
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
          <div className="rounded-2xl border border-white/20 bg-slate-950/15 p-3 text-white backdrop-blur-sm">
            <Icon size={26} strokeWidth={1.7} />
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
            {project.tag}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
          {project.type}
        </p>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-[Poppins,sans-serif] text-xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <ArrowUpRight
            className="mt-1 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            size={19}
          />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
        <p className="mt-5 border-t border-border pt-4 text-sm font-semibold text-foreground">
          {project.impact}
        </p>
      </div>
    </article>
  )
}
