import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ProjectCard from '#/components/ProjectCard'
import { projects, projectTags } from '#/data/projects'
import type { ProjectTag } from '#/data/projects'

export const Route = createFileRoute('/projects')({ component: Projects })

function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectTag>('All')
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.tag === filter)

  return (
    <div>
      <section className="page-hero">
        <div className="container wrap relative">
          <p className="section-kicker">Our work</p>
          <h1 className="page-title max-w-3xl">Projects shaped for the work behind the work.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            A selection of products and platforms across finance, education and health—built to be clear, resilient and genuinely useful.
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container !py-0">
          <div className="flex flex-wrap gap-2" aria-label="Filter projects by sector">
            {projectTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${filter === tag ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-foreground hover:border-primary hover:text-primary'}`}
                aria-pressed={filter === tag}
              >
                {tag}
              </button>
            ))}
          </div>
          <p className="mt-7 text-sm text-muted-foreground">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}{filter === 'All' ? '' : ` in ${filter}`}.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
