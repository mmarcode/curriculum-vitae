import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../ui/Section'
import Badge from '../ui/Badge'
import { Card, CardHeader, CardContent } from '../ui/Card'
import { cn } from '../../helpers/utils'

const BadgeList = ({ className, badges }) => {
  if(!badges || badges.length === 0) return null;
  return (
    <ul className={cn("flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {
        badges.map(( badge ) => (
          <li key={ badge }>
            <Badge variant="secondary"
              className="align-middle text-pretty
              font-mono text-[11px] print:px-1
              print:py-0.5 print:text-[8px] print:leading-tight"
            >
              { badge }
            </Badge>
          </li>
        ))
      }
    </ul>
  );
}

const WorkPeriod = ({ start, end, label }) => (
  <div className="text-sm tabular-nums text-gray-500 print:text-[12px] print:leading-tight"
    aria-label={`Employment period: ${ start } to ${ end ?? label }`}
  >
    { start } - { end ?? label }
  </div>
)

const CompanyLink = ({ company, link }) => (
  <a className="hover:underline text-pretty"
    href={ link }
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${ company } company website`}
  >
    { company }
  </a>
)

const WorkExperienceItem = ({ work, period }) => {
  const { company, link, badges, title, start, end, description } = work;
  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1
            font-semibold leading-none print:text-sm">
            <CompanyLink company={ company } link={ link } />
            <BadgeList className="hidden gap-x-1 sm:inline-flex"
              badges={ badges }
            />
          </h3>
          <WorkPeriod start={ start } end={ end } label={ period }/>
        </div>
        <h4 className="text-pretty font-mono text-sm font-semibold leading-none
          print:text-[12px] text-gray-900/80">
          { title }
        </h4>
      </CardHeader>
      <CardContent>
        <div className="mt-2 text-pretty font-mono text-sm text-gray-900/80
          print:mt-1 print:text-[12px]">
          {
            description.map(( item ) => (
            <ul key={ item } className="list-inside list-disc">
              <li>{ item }</li>
            </ul>
          ))
          }
        </div>
        <div className="mt-2">
          <BadgeList className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={ badges }
          />
        </div>
      </CardContent>
    </Card>
  );
}

const WorkExperience = () => {
  const { t } = useTranslation();
  const works = t('translation:works', { returnObjects: true });
  return (
    <Section title={ t('translation:labels:experience') }>
      <div role="feed"
        className="space-y-4 print:space-y-0"
        aria-labelledby="work-experience">
        {
          works.length === 0 ? (
            <p> No work experience available </p>
          ) : (
            works.map(( item ) => (
              <article key={`${ item.company }-${ item.start }`} role="article">
                <WorkExperienceItem
                  work={ item }
                  period={ t('translation:labels:period') }
                />
              </article>
            ))
          )
        }
      </div>
    </Section>
  )
}

export default WorkExperience