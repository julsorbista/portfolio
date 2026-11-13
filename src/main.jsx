import React, { useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { profile } from './data/profile';
import './styles.css';
import './sections.css';
function App() {
  const dialog = useRef(null);
  const [notice, setNotice] = useState({title:'',text:''});
  useEffect(() => {if(notice.title) dialog.current.showModal();}, [notice]);
  useEffect(() => { document.querySelectorAll('main > section').forEach(section => { section.tabIndex = -1; }); }, []);
  const explore = () => {
    const section = document.getElementById('projects');
    section.focus({ preventScroll: true });
    section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    history.replaceState(null, '', '#projects');
  };
  const viewCV = () => {
    if (profile.cvUrl) window.open(profile.cvUrl + '#toolbar=0', '_blank', 'noopener,noreferrer');
    else setNotice({ title: 'CV coming soon.' });
  };
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#home">Skip to content</a><Navbar onViewCV={viewCV}/><main><Hero onExplore={explore} onViewCV={viewCV}/><About/><Skills/><Projects/><Education/><Certifications/><Contact/></main><Footer/><dialog ref={dialog} className="notice-dialog" aria-labelledby="cv-notice-title" aria-describedby="cv-notice-description" onClick={e => {if(e.target === dialog.current) dialog.current.close();}}><button className="dialog-close" aria-label="Close notice" onClick={() => dialog.current.close()}><X/></button><span className="dialog-label">JULIANA ORBISTA / CV</span><h2 id="cv-notice-title">{notice.title}</h2><p id="cv-notice-description">Juliana’s CV hasn’t been added yet. Check back soon to view the CV.</p><button className="primary-button" onClick={() => dialog.current.close()}>Back to the portfolio</button></dialog></MotionConfig>;
}
createRoot(document.getElementById('root')).render(<App/>);
