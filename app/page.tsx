import NavBar from '@/components/nav-bar'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import About from '@/components/about'
import Contacts from '@/components/contacts'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <NavBar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      <Footer />
    </>
  );
}

