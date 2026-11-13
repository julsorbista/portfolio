import { motion } from 'motion/react';
export function Reveal({ children, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>{children}</motion.div>;
}
export default function SectionHeading({ number, label, title, aside }) {
  return <Reveal className="section-heading"><div className="section-kicker"><span>{number} / {label}</span><span aria-hidden="true">+ — +</span></div><div className="section-title-row"><h2>{title}<span>.</span></h2>{aside && <p>{aside}</p>}</div></Reveal>;
}
