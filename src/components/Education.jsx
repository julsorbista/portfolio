import { GraduationCap } from 'lucide-react';
import { profile } from '../data/profile';
import SectionHeading, { Reveal } from './SectionHeading';
export default function Education() {
  const education = profile.education;
  return <section id="education" className="editorial-section education-section light-section" aria-label="Education"><SectionHeading number="05" label="EDUCATION" title="MY JOURNEY"/><Reveal className="education-timeline"><div className="timeline-caption"><GraduationCap size={32} strokeWidth={1}/><span>THE ACADEMIC CHAPTER</span></div><div className="timeline-entry"><span className="timeline-dot"/><span className="eyebrow">{education.dates || 'DATES TO BE PROVIDED'}</span><h3>{education.degree}</h3><p>{education.institution || 'University to be added from CV'}</p>{education.details ? <p className="education-details">{education.details}</p> : <p className="missing-detail">Exact degree title and academic details awaiting CV.</p>}</div></Reveal></section>;
}

