import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../Section'

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Section title={ t('headers:projects') }>

    </Section>
  )
}

export default Projects
