import { useEffect, useRef, useState } from 'react';
import { Eye, Menu, X } from 'lucide-react';
import { navigation } from '../data/profile';
export default function Navbar({ onViewCV }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const menuButton = useRef(null);
  useEffect(() => {
    const update = () => {
      let current = 'home';
      navigation.forEach(item => {
        const section = document.getElementById(item.toLowerCase());
        if (section && section.getBoundingClientRect().top <= window.innerHeight * .3) current = section.id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  const navigate = (event, item) => {
    setOpen(false);
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      event.preventDefault();
      history.replaceState(null, '', `#${section.id}`);
      section.focus({ preventScroll: true });
      section.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  };
  return <header className="site-header"><a className="wordmark" href="#home" aria-label="Juliana Orbista home">Juliana<span aria-hidden="true">✳</span></a>
    <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation" onKeyDown={e => { if(e.key === 'Escape') {setOpen(false); menuButton.current.focus();} }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget) && e.relatedTarget !== menuButton.current) setOpen(false); }}>
      {navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} aria-current={active === item.toLowerCase() ? 'location' : undefined} onClick={e => navigate(e, item)}>{item}</a>)}
      <button className="nav-cv" onClick={onViewCV}>View CV <Eye size={14}/></button>
    </nav>
  </header>;
}
