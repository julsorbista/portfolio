import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
export default function Footer() {
  return <footer className="site-footer"><a className="wordmark" href="#home" aria-label="Juliana Orbista home">Juliana<span aria-hidden="true">✳</span></a><span>© {new Date().getFullYear()} {profile.name}</span><a className="back-top" href="#home">BACK TO TOP <ArrowUp size={17}/></a></footer>;
}

