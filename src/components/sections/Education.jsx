import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../Section'

const Education = () => {
  const { t } = useTranslation();
  return (
    <Section title={ t('headers:education') }>

    </Section>
  )
}

export default Education
