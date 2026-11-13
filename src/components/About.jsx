import { ArrowDownRight, UserRound } from 'lucide-react';
import { profile } from '../data/profile';
import SectionHeading, { Reveal } from './SectionHeading';
export default function About() {
  return <section id="about" className="editorial-section about-section light-section" aria-label="About me">
    <SectionHeading number="02" label="ABOUT" title="ABOUT ME"/>
    <div className="about-layout"><Reveal className="portrait-wrap"><figure className="polaroid"><span className="paper-tape" aria-hidden="true"/>{profile.photoUrl ? <img src={profile.photoUrl} alt="Juliana Orbista" loading="lazy" width="640" height="760"/> : <div className="portrait-placeholder"><UserRound size={64} strokeWidth={0.8}/><span>PORTRAIT COMING SOON</span></div>}<figcaption><span>Juliana</span><span aria-hidden="true">✳</span></figcaption></figure></Reveal>
    <Reveal className="about-copy"><h3>Turning ideas<br/>into websites<span>.</span></h3><p>{profile.introduction}</p><div className="about-study"><span className="eyebrow">EDUCATION</span><p>{profile.education.degree}</p><span className="missing-detail">{[profile.education.institution, profile.education.dates].filter(Boolean).join(' / ') || 'University and dates to be added from CV.'}</span></div><a className="text-link" href="#skills">Meet my toolkit <ArrowDownRight size={18}/></a></Reveal></div>
    <div className="section-ribbon" aria-hidden="true"><span>IDEA</span><span>↗</span><span>INTERFACE</span><span>↗</span><span>CODE</span><span>✳</span><span>KEEP EXPLORING</span></div>
  </section>;
}






