import { ArrowUpRight, FileBadge2 } from 'lucide-react';
import { profile } from '../data/profile';
import SectionHeading, { Reveal } from './SectionHeading';
export default function Certifications() {
  return <section id="certifications" className="editorial-section certifications-section light-section" aria-label="Certifications"><SectionHeading number="06" label="CONTINUED LEARNING" title="CERTIFICATIONS"/>
    <Reveal>{profile.certifications.length ? <ul className="certificate-list">{profile.certifications.map((certificate, index) => <li key={`${certificate.name}-${index}`}><span className="certificate-index">{String(index + 1).padStart(2, '0')}</span><div><h3>{certificate.name}</h3>{(certificate.issuer || certificate.date) && <p>{[certificate.issuer, certificate.date].filter(Boolean).join(' / ')}</p>}</div>{certificate.url && <a href={certificate.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${certificate.name} certificate`}>View certificate <ArrowUpRight size={17}/></a>}</li>)}</ul> : <div className="certificate-empty"><FileBadge2 size={35} strokeWidth={1}/><div><h3>More of the learning story.</h3><p>Verified certifications will appear here once the CV and certificate details are provided.</p></div><span className="eyebrow">AWAITING DETAILS</span></div>}</Reveal>
  </section>;
}

