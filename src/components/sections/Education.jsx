import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../ui/Section'
import { Card, CardHeader, CardContent } from '../ui/Card'
import { cn } from '../../helpers/utils'

const EducationPeriod = ({ start, end }) => (
  <div className="text-sm tabular-nums text-gray-500 print:text-[12px]"
    aria-label={`Education period: ${ start } to ${ end }`}
  >
    { start } - { end }
  </div>
)

const EducationLink = ({ className, institution, link }) => (
  <a className={cn("hover:underline text-pretty", className)}
    href={ link }
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${ institution } school website`}
  >
    { institution }
  </a>
)

const EducationItem = ({ education }) => {
  const { institution, abbreviation, url, area, start, end } = education;
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between 
          gap-x-2 text-base">
          <h3 className="font-semibold leading-none" 
            id={`education-${ institution.toLowerCase().replace(/\s+/g, "-") }`}>
            <EducationLink 
              className="hidden gap-x-1 sm:inline-flex"
              institution={ institution }
              link={ url }
            />
            <EducationLink
              className="flex-wrap gap-1 sm:hidden"
              institution={ abbreviation }
              link={ url }
            />
          </h3>
          <EducationPeriod
            className="hidden gap-x-1 sm:inline-flex"
            start={ start }
            end={ end }
          />
        </div>
      </CardHeader>
      <CardContent className="mt-2 text-pretty font-mono text-sm text-gray-900/80 
        print:mt-1 print:text-[12px]"
        aria-labelledby={`education-${institution.toLowerCase().replace(/\s+/g, "-")}`}>
        { area }
      </CardContent>
    </Card>
  );
}

const Education = () => {
  const { t } = useTranslation();
  const schools = t('translation:education', { returnObjects: true });
  return (
    <Section title={ t('translation:labels:education') }>
      <div className="space-y-4" role="feed" aria-labelledby="education-section">
        {
          schools.length === 0 ? (
            <p> No education available </p>
          ) : (
            schools.map((item) => (
              <article key={item.institution} role="article">
                <EducationItem education={ item }/>
              </article>
            ))
          )
        }
      </div>
    </Section>
  )
}

export default Education
