import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../Section'

const WorkExperience = () => {
    const { t } = useTranslation();
  return (
    <Section title={ t('headers:experience') }>
      
    </Section>
  )
}

export default WorkExperience
