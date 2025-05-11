import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../ui/Section'

const Summary = () => {
  const { t } = useTranslation();
  return (
    <Section title={ t('translation:labels:about') }>
      <div aria-labelledby="about-section"
        className="text-pretty font-mono text-sm text-gray-900/80 print:text-[12px]">
        {
          t('translation:basics:summary', { returnObjects: true }).map(( item ) => (
            <ul key={ item }>
              <li className='mb-1.5'>{ item }</li>
            </ul>
          ))
        }
      </div>
    </Section>
  )
}

export default Summary
