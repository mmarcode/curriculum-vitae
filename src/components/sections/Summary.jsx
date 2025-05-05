import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../Section'

const Summary = () => {
  const { t } = useTranslation();
  return (
    <Section title={ t('headers:about') }>
      <div aria-labelledby="about-section"
        className="text-pretty font-mono text-sm text-gray-900/80 print:text-[12px]">
        { t('basics:summary') }
      </div>
    </Section>
  )
}

export default Summary
