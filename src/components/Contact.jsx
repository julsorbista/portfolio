import { ArrowUpRight, Eye } from 'lucide-react';
import { profile } from '../data/profile';
import SectionHeading, { Reveal } from './SectionHeading';
export default function Contact() {
  const links = [{name:'Email',url:profile.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}` : null,detail:profile.email}, {name:'GitHub',url:profile.githubUrl}, {name:'LinkedIn',url:profile.linkedinUrl}, {name:'View CV',url:profile.cvUrl ? profile.cvUrl + '#toolbar=0' : null,isCV:true}];
  return <section id="contact" className="editorial-section contact-section" aria-label="Contact"><SectionHeading number="07" label="SAY HELLO" title="LET’S CONNECT"/><Reveal className="contact-layout"><div><p className="contact-message">Have an opportunity, project, or idea in mind? I'd love to connect and explore what's possible.</p><div className="contact-signoff"><span aria-hidden="true">✳</span><span>GOOD THINGS START<br/>WITH A CONVERSATION.</span></div></div><ul className="contact-links">{links.map(link => <li key={link.name}>{link.url ? <a href={link.url} target="_blank" rel="noopener noreferrer"><span>{link.name}<small>{link.detail}</small></span>{link.isCV ? <Eye size={21}/> : <ArrowUpRight size={24}/>}</a> : <div className="contact-unavailable"><span>{link.name}</span><small>TO BE PROVIDED</small></div>}</li>)}</ul></Reveal></section>;
}
