import React from 'react'

const Section = ({ title, children }) => {
  return (
    <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
      { title && <h2 className="text-xl font-bold" id={`${ title }-section`}>{ title }</h2> }
      { children }
    </section>
  )
}

export default Section