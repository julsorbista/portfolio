import { skillGroups } from '../data/projects';
import SectionHeading, { Reveal } from './SectionHeading';
export default function Skills() {
  return <section id="skills" className="editorial-section skills-section" aria-label="Technical skills"><SectionHeading number="03" label="TECHNOLOGIES I WORK WITH" title="TECH STACK" aside="The tools behind the ideas."/>
    <Reveal className="stack-console"><div className="console-bar"><span><i/><i/><i/></span><span>JULIANA / DEVELOPMENT ENVIRONMENT</span><span>v.2026</span></div><div className="stack-panels">{skillGroups.map(group => <div className={`stack-panel stack-${group.code}`} key={group.code}><div className="stack-panel-header"><span className="stack-symbol" aria-hidden="true">{group.symbol}</span><span>STACK / {group.code}</span></div><h3>{group.name}</h3><ul className="technology-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul>{group.note && <p className="stack-note">{group.note}</p>}</div>)}</div><div className="console-footer"><span><i/> ALWAYS LEARNING</span></div></Reveal>
  </section>;
}
