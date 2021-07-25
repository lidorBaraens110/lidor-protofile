

import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import React, { useRef } from 'react';

function App() {
  const aboutRef = useRef();
  const homeRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollTo = (e) => {
    switch (e) {
      case 'Home':
        return homeRef.current.scrollIntoView({ behavior: 'smooth' })
      case 'About':
        return aboutRef.current.scrollIntoView({ behavior: 'smooth' })
      case 'Skills':
        return skillsRef.current.scrollIntoView({ behavior: 'smooth' })
      case 'Projects':
        return projectsRef.current.scrollIntoView({ behavior: 'smooth' });
      case 'Contact':
        return contactRef.current.scrollIntoView({ behavior: 'smooth' });

      default:
        console.log('error')
    }
  }

  return (
    <div style={{ maxWidth: '100%' }}>
      <NavBar scroll={scrollTo} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef} >
        <About scrollTo={scrollTo} />
      </div>
      <div ref={skillsRef} >
        <Skills scrollTo={scrollTo} />
      </div>
      <div ref={projectsRef} >
        <Projects scrollTo={scrollTo} />
      </div>
      <div ref={contactRef}>
        <Contact scrollTo={scrollTo} />
      </div>
    </div>
  );
}

export default App;
