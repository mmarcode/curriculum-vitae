import React from 'react'

import Education from './components/sections/Education'
import Header from './components/sections/Header'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Summary from './components/sections/Summary'
import WorkExperience from './components/sections/WorkExperience'
import './i18n/i18n'

function App() {
  return (
    <div className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <div className="space-y-8 print:space-y-4">
        <Header />
        <Summary />
        <WorkExperience />
        <Education />
        <Projects />
        <Skills />
      </div>
    </div>
  )
}

export default App
