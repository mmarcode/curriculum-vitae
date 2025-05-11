import React from 'react'
import { useTranslation } from 'react-i18next'
import Badge from '../ui/Badge'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../ui/Card'
import Section from '../ui/Section'

const ProjectTags = ({ tags }) => {
  return (
    <ul aria-label="Technologies used" className="mt-2 flex list-none flex-wrap gap-1 p-0">
      {
        tags.map((tag) => (
          <li key={ tag }>
            <Badge variant="secondary"
              className="px-1 py-0 text-[10px] print:px-1
              print:py-0.5 print:text-[8px] print:leading-tight"
            >
              {tag}
            </Badge>
          </li>
        ))
      }
    </ul>
  )
}

const ProjectLink = ({ title, link, isActive }) => {
  return (
    <>
      <a href={ link } target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline mb-2"
        aria-label={`${ title } project (opens in new tab)`}
      >
        { title }
        {
          isActive && <span className="size-1 rounded-full bg-green-500" 
            aria-label="Active project indicator"
          />
        }
      </a>
      <div aria-hidden="true" className="hidden font-mono text-xs underline print:visible">
        { link.replace("https://", "").replace("www.", "").replace("/", "") }
      </div>
    </>
  )
}

const ProjectCard = ({ title, description, tags, link, isActive }) => {
  return (
    <Card role="article" className="flex h-full flex-col overflow-hidden border border-gray-300/30 p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <ProjectLink title={ title }
              link={ link } 
              isActive={ isActive }
            />
          </CardTitle>
          <CardDescription aria-label="Project description"
            className="text-pretty font-mono text-xs print:text-[10px]"
          >
            { description }
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <ProjectTags tags={ tags } />
      </CardContent>
    </Card>
  )
}

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Section title={ t('translation:labels:projects') }>
      <div role="feed" aria-labelledby="side-projects"
        className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 
        print:gap-2 md:grid-cols-2 lg:grid-cols-3"
      >
        {
          t('translation:projects', { returnObjects: true }).map((project) => (
            <article key={ project.name } className="h-full">
              <ProjectCard title={ project.name }
                description={ project.description }
                tags={ project.techStack }
                link={ project.url }
                isActive={ project.isActive }
              />
            </article>
          ))
        }
      </div>
    </Section>
  )
}

export default Projects
