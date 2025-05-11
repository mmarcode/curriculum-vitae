import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../ui/Section'
import Badge from '../ui/Badge'
import { cn } from '../../helpers/utils'
import HTMLIcon from '../../icons/HTMLIcon'
import CSSIcon from '../../icons/CSSIcon'
import JavaScriptIcon from '../../icons/JavaScriptIcon'
import TailwindIcon from '../../icons/TailwindIcon'
import NodeIcon from '../../icons/NodeIcon'
import GitIcon from '../../icons/GitIcon'
import ReactIcon from '../../icons/ReactIcon'
import SQLServerIcon from '../../icons/SQLServerIcon'
import ColdFusionIcon from '../../icons/ColdFusionIcon'

const ICONS = { HTMLIcon, CSSIcon, JavaScriptIcon, ColdFusionIcon,
  TailwindIcon, NodeIcon, GitIcon, ReactIcon, SQLServerIcon
};

const SkillsList = ({ skills, className = '' }) => {
  return (
    <ul className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of skills"
    >
    {
      skills.length === 0 ? (
        <li> No skills available </li>
      ) : (
        skills.map(( item ) => {
          const Icon = ICONS[`${item.name.replace(" ", "")}Icon`];
          return (
            <li key={ item.name }>
              <Badge variant="secondary"
                className="print:text-[10px]"
                aria-label={`Skill: ${ item.name }`}>
                {
                  Icon && <Icon />
                }
                { item.name }
              </Badge>
            </li>
          )
        })
      )
    }
    </ul>
  )
}

const Skills = () => {
  const { t } = useTranslation();
  const technicalSkills = t('translation:skills', { returnObjects: true });
  return (
    <Section title={ t('translation:labels:skills') }>
      <div className="space-y-4" role="feed" aria-labelledby="education-section">
        <SkillsList className="gap-x-1 sm:inline-flex" skills={ technicalSkills }/>
      </div>
    </Section>
  )
}

export default Skills
