import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../hooks/useLanguage'
import Section from '../ui/Section'
import EmailIcon  from '../../icons/EmailIcon'
import GitHubIcon from '../../icons/GitHubIcon'
import LanguageIcon from '../../icons/LanguajeIcon'
import LinkedInIcon from '../../icons/LinkedinIcon'
import LocationIcon from '../../icons/LocationIcon'
import PhoneIcon from '../../icons/PhoneIcon'
import WebsiteIcon from '../../icons/WebsiteIcon'

const SOCIAL_ICONS = { GitHubIcon, LinkedInIcon };

const Location = ({ link, city, region, countryCode }) => (
  <p className="max-w-md mt-1.5 items-center text-pretty font-mono text-xs text-gray-900">
    <a className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
       href={ link } target="_blank" rel="noopener noreferrer"
       aria-label={`Location: ${ city }, ${ region }, ${ countryCode }`}>
      <LocationIcon />
      { city }, { region }
    </a>
  </p>
);

const TranslateButton = ({ onClick }) => (
  <button onClick={ onClick } className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
    ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300
    bg-white hover:bg-gray-300/30 hover:text-gray-900 size-8 cursor-pointer">
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
        const Icon = SOCIAL_ICONS[`${ network }Icon`];
        return (<LinkButton key={ network + username } href={ url } label={`${ network } - ${ username }`} icon={<Icon width={ 24 } height={ 24 }/>} />)
      })
    }
  </div>
);

const PrintContact = ({ email, phone, profiles }) => {
  const LINKEDIN_INFO = profiles.find(({ network }) => network === 'LinkedIn');
  const LinkedInURL = LINKEDIN_INFO?.url;
  return (
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
            <a className="underline hover:text-gray-900/70" href={`tel:${ phone }`}>
              { phone }
            </a>
          </>
        )
      }
      {
        LinkedInURL && (
          <>
            <span aria-hidden="true">/</span>
            <a className="underline hover:text-gray-900/70" href={ LinkedInURL }>
              { LinkedInURL }
            </a>
          </>
        )
      }
    </div>
  )
}

const Hero = ({ name, image }) => (
  <img className="w-24 h-24 rounded-md object-cover print:hidden mx-auto mt-[55px] md:mt-0"
    alt={`${ name }'s profile picture`} src={ image }
  />
);

const Header = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();
  return (
    <Section>
      <header className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8">
        <div className="flex-1 space-y-1.5">
          <h1 className="text-2xl font-extrabold">
            { t('translation:basics:name') }
          </h1>
          <p className="max-w-md text-pretty font-mono text-sm
          text-gray-900/80 print:text-[12px]"
            aria-labelledby="resume-name"
          >
              { t('translation:basics:label') }
          </p>
          <Location
            link={ t('translation:basics:location.link') }
            city={ t('translation:basics:location.city') }
            region={ t('translation:basics:location.region') }
            countryCode={ t('translation:basics:location.countryCode') }
          />
          <ContactButton
            website={ t('translation:basics:website') }
            email={ t('translation:basics:email') }
            phone={ t('translation:basics:phone') }
            profiles={ t('translation:basics:profiles', { returnObjects: true }) }
            onLanguageChange={ changeLanguage } 
          />
          <PrintContact
            email={ t('translation:basics:email') }
            phone={ t('translation:basics:phone') }
            profiles={ t('translation:basics:profiles', { returnObjects: true }) }
          />
        </div>
        <Hero name={ t('translation:basics:name') }
          image={ t('translation:basics:image') }
        />
      </header>
    </Section>
  )
}

export default Header
