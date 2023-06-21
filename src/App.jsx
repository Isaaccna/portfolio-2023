import './App.css'  
import { About } from './components/about'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Portfolio } from './components/portfolio'
import { SkillsList } from './components/skillsList'

export function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <SkillsList />
<Portfolio />
<Contact />
<Footer />
    </>
  )

}


