import { BrowserRouter } from "react-router-dom"
import { About, Contact, Certificates, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from './components'
import { Analytics } from '@vercel/analytics/react';


const App = () => {

  return (
    <BrowserRouter>
    <Analytics />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Certificates />
        <Tech />
        <Projects />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
