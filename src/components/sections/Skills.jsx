import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../Section'

const Skills = () => {
  const { t } = useTranslation();
  return (
    <Section title={ t('headers:skills') }>

    </Section>
  )
}

export default Skills
