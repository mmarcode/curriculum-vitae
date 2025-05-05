import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../hooks/useLanguage'
import Section from '../Section'
import EmailIcon  from '../../icons/EmailIcon'
import GitHub from '../../icons/GithubIcon'
import LanguageIcon from '../../icons/LanguajeIcon'
import LinkedIn from '../../icons/LinkedinIcon'
import LocationIcon from '../../icons/LocationIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import WebsiteIcon from '../../icons/WebsiteIcon'

const SOCIAL_ICONS = { GitHub, LinkedIn };

const Location = ({ link, city, region, countryCode }) => (
  <p className="max-w-md items-center text-pretty font-mono text-xs text-gray-900">
    <a className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
       href={ link } target="_blank" rel="noopener noreferrer"
       aria-label={`Location: ${ city }, ${ region }, ${ countryCode }`}>
      <LocationIcon />
      { city }, { region }, { countryCode }
    </a>
  </p>
);

const TranslateButton = ({ onClick }) => (
  <button onClick={ onClick } className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
    ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300
    bg-white hover:bg-gray-300/30 hover:text-gray-900 size-8">
    <LanguageIcon />
  </button>
);

const LinkButton = ({ href, label, icon }) => (
  <a href={ href } aria-label={ label } target="_blank" rel="noopener noreferrer"
    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
    border border-gray-300 bg-white hover:bg-gray-300/30 hover:text-gray-900 size-8">
    { icon }
  </a>
);

const ContactButton = ({ website, email, phone, profiles, onLanguageChange }) => (
  <div className="flex gap-x-1 pt-1 font-mono text-sm text-gray-900/90 print:hidden" role="list" aria-label="Contact links">
    <TranslateButton onClick={ onLanguageChange }/>
    {email && (<LinkButton href={`mailto:${ email }`} label="Email" icon={<EmailIcon />} />)}
    {phone && (<LinkButton href={`tel:${ phone }`} label="Phone" icon={<PhoneIcon />} />)}
    {website && (<LinkButton href={ website } label="Personal website" icon={<WebsiteIcon />}/>)}
    {
      profiles.map(({ network, url, username }) => {
        const Icon = SOCIAL_ICONS[network];
        return (<LinkButton key={network + username} href={ url } label={`${ network } - ${ username }`} icon={<Icon />} />)
      })
    }
  </div>
);

const PrintContact = ({ email, phone }) => (
  <div className="hidden gap-x-2 font-mono text-sm text-gray-900/80 print:flex print:text-[12px]"
    aria-label="Print contact information">
    {
      email && (
        <a className="underline hover:text-gray-900/70" href={ email }>
          { email }
        </a>
      )
    }
    {
      phone && (
        <>
          <span aria-hidden="true">/</span>
          <a className="underline hover:text-gray-900/70" href={`tel:${phone}`}>{ phone }</a>
        </>
      )
    }
  </div>
);

const Hero = ({ name, image }) => (
  <img className="w-24 h-24 rounded-md object-cover mt-6 sm:mt-0 print:hidden"
    alt={`${name}'s profile picture`} src={ image }
  />
);

const Header = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();
  return (
    <Section>
      <header className="flex items-center justify-between">
        <div className="flex-1 space-y-1.5">
          <h1 className="text-2xl font-extrabold">{ t('basics:name') }</h1>
          <p className="max-w-md text-pretty font-mono text-sm text-gray-800/80 print:text-[12px]"
            aria-labelledby="resume-name">
              { t('basics:label') }
          </p>
          <Location link={ t('basics:location.link') } city={ t('basics:location.city') } region={ t('basics:location.region') } countryCode={ t('basics:location.countryCode') } />
          <ContactButton website={ t('basics:website') } email={ t('basics:email') } phone={ t('basics:phone') } profiles={ t('basics:profiles', { returnObjects: true }) } onLanguageChange={ changeLanguage }/>
          <PrintContact email={ t('basics:email') } phone={ t('basics:phone') } />
        </div>
        <Hero name={ t('basics:name') } image={ t('basics:image') } />
      </header>
    </Section>
  )
}

export default Header
