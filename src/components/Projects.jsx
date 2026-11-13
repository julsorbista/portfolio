import { ArrowUpRight, Image, Smartphone } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeading, { Reveal } from './SectionHeading';
import ProjectGallery from './ProjectGallery';
function ProjectVisual({ project }) {
  const images = project.images || (project.screenshot ? [{ src: project.screenshot, alt: `${project.name} application screenshot`, caption: 'Application preview', width: 1200, height: 800 }] : []);
  return <div className={`project-visual visual-${project.format}`}><div className={`device-frame device-${project.format}`}>
    <div className="device-toolbar"><span className="window-dots"><i/><i/><i/></span><span>{project.format === 'mobile' ? 'MOBILE / APP PREVIEW' : `${project.name.toUpperCase()} / PROJECT PREVIEW`}</span><span aria-hidden="true">↗</span></div>
    {images.length ? <ProjectGallery project={project} images={images}/> : <div className="screenshot-placeholder">{project.format === 'mobile' ? <Smartphone size={35} strokeWidth={1}/> : <Image size={35} strokeWidth={1}/>}<span>{project.name}</span><small>Preview coming soon</small></div>}
    </div></div>;
}
function ProjectInformation({ project, index }) {
  return <div className="project-info"><div className="project-index"><span>PROJECT / {String(index + 1).padStart(2, '0')}</span>{index === 0 && <span className="featured-stamp">FEATURED WORK</span>}</div><h3>{project.name}<span>↗</span></h3><p className="project-subtitle">{project.subtitle}</p>{project.description && <p className="project-description">{project.description}</p>}{project.technologies.length > 0 && <div className="project-technologies">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>}
    <details className="project-details"><summary>Project notes <span aria-hidden="true">+</span></summary><dl>{project.role && <><dt>Role</dt><dd>{project.role}</dd></>}{project.dates && <><dt>Timeline</dt><dd>{project.dates}</dd></>}<>{project.features.length > 0 && <><dt>Key features</dt><dd><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></dd></>}</>{project.contribution && <><dt>My contribution</dt><dd>{project.contribution}</dd></>}</dl></details>
    {(project.githubUrl || project.demoUrl) && <div className="project-links">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>View on GitHub <ArrowUpRight size={15}/></a>}{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live project <ArrowUpRight size={15}/></a>}</div>}</div>;
}
export default function Projects() {
  return <section id="projects" className="editorial-section projects-section light-section" aria-label="Selected projects"><SectionHeading number="04" label="PROJECT ARCHIVE" title="SELECTED WORKS" aside="An evolving collection of ideas in code."/>
    <div className="project-archive">{projects.map((project, index) => <Reveal className={`project-entry project-${project.format}`} key={project.id}><article aria-labelledby={`title-${project.id}`}><span id={`title-${project.id}`} className="sr-only">{project.name}</span><ProjectVisual project={project}/><ProjectInformation project={project} index={index}/></article></Reveal>)}</div><div className="archive-end"><span>05 PROJECTS / MORE TO EXPLORE</span><span aria-hidden="true">✳</span><span>LEARNING, ONE BUILD AT A TIME.</span></div>
  </section>;
}

