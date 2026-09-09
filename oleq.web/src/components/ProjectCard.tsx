import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Trophy,
} from 'lucide-react'
import type { Project } from '#/data/projects'

const icons = {
  Finance: Landmark,
  Education: GraduationCap,
  Health: HeartPulse,
  Insurance: ShieldCheck,
  Sports: Trophy,
  'Property Management': Building2,
}

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.tag]

  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/10">
      <div
        className={`relative h-52 overflow-hidden ${project.imageFit === 'contain' ? 'bg-slate-950 p-3' : 'bg-slate-100 dark:bg-slate-800'}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? `${project.name} project preview`}
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
            className={`h-full w-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'} ${project.imageScale === 'zoom-out' ? 'scale-90 group-hover:scale-95' : 'group-hover:scale-[1.03]'} transition duration-500`}
          />
        ) : (
          <div className="flex h-full items-end bg-slate-200 p-6 dark:bg-slate-800">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.14em] text-slate-500 dark:text-slate-400">
                Project preview
              </p>
              <p className="mt-2 font-[Poppins,sans-serif] text-3xl font-semibold text-slate-700 dark:text-slate-200">
                {project.name}
              </p>
            </div>
          </div>
        )}
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
          <div className="rounded-xl border border-white/30 bg-slate-950/65 p-2.5 text-white backdrop-blur-sm">
            <Icon size={23} strokeWidth={1.7} />
          </div>
          <span className="rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
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
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name}`}
              className="mt-1 shrink-0 text-muted-foreground transition hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <ArrowUpRight size={19} />
            </a>
          ) : null}
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
