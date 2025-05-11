import React from 'react'
import { cn } from '../../helpers/utils'

const Section = ({ title, children, className }) => {
  return (
    <section className={cn("flex min-h-0 flex-col gap-y-3 print:gap-y-1 mx-auto w-full max-w-2xl space-y-4 bg-white print:space-y-4", className)}>
      { title && <h2 className="text-xl font-extrabold" id={ `section-${title.toLowerCase().replace(/\s+/g, "-")}` }>{ title }</h2> }
      { children }
    </section>
  )
}

export default Section