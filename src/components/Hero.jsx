import { ArrowDownRight, ArrowUpRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { profile } from '../data/profile';
import DecorativeElements from './DecorativeElements';
export default function Hero({ onExplore, onViewCV }) {
  return <section id="home" tabIndex={-1} className="hero" aria-labelledby="hero-heading">
    <div className="hero-topline"><span><i/> A PERSONAL SPACE ON THE INTERNET</span><span>PORTFOLIO / 2026</span></div>
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.8}}>
      <div className="title-row"><h1 id="hero-heading">PORTFOLIO<span className="title-period">.</span></h1><span className="title-star" aria-hidden="true">✳</span></div>
    </motion.div>
    <div className="hero-body"><motion.div className="intro" initial={{opacity:0, y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.15}}>
      <div className="intro-label"><span>01 / INTRODUCTION</span><span className="tiny-line"/></div>
      <p className="hello">Hi there, I’m</p><h2>{profile.name}<span>®</span></h2>
      <p className="role">{profile.role}</p>
      <p className="description">Bringing ideas to life through thoughtful interfaces<br className="desktop-break"/> and the code that makes them work.</p>
      <div className="hero-actions"><button className="primary-button" onClick={onExplore}>Explore my work <ArrowUpRight size={19}/></button><button className="secondary-button" onClick={onViewCV}>View CV <Eye size={16}/></button></div>
      <div className="personal-note"><span aria-hidden="true">✦</span> A little creativity. A lot of curiosity.</div>
    </motion.div><DecorativeElements/></div>
    <div className="hero-bottom"><span className="bottom-caption">CREATIVE MIND.<br/><strong>DEVELOPER IN THE MAKING.</strong></span><span className="edition">DESIGNED TO EXPLORE · BUILT TO EVOLVE</span><button className="scroll-note" onClick={onExplore}>DISCOVER MORE <ArrowDownRight size={23}/></button></div>
  </section>;
}
