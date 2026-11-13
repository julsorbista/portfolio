import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

export default function ProjectGallery({ project, images }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef(null);
  const selected = images[index];
  const step = direction => setIndex(current => (current + direction + images.length) % images.length);

  useEffect(() => {
    if (!expanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [expanded]);

  const open = () => { dialog.current.showModal(); setExpanded(true); };
  return <>
    <button className="screenshot-open" onClick={open} aria-label={`Enlarge ${project.name}: ${selected.caption}`}>
      <img src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} loading="lazy" decoding="async"/>
      <span className="screenshot-expand"><Expand size={13}/> VIEW SCREENSHOT</span>
    </button>
    <div className="gallery-controls" aria-label={`${project.name} screenshot selection`}>
      <div className="gallery-thumbnails">{images.map((image, imageIndex) => <button key={image.src} className="gallery-thumbnail" aria-label={`Show ${project.name}: ${image.caption}`} aria-pressed={index === imageIndex} onClick={() => setIndex(imageIndex)}><img src={image.src} alt="" width={image.width} height={image.height} loading="lazy" decoding="async"/></button>)}</div>
      <p className="gallery-caption" aria-live="polite"><span>{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>{selected.caption}</p>
    </div>
    <dialog ref={dialog} className="screenshot-dialog" aria-label={`${project.name} screenshot gallery`} onClose={() => setExpanded(false)} onClick={event => { if (event.target === dialog.current) dialog.current.close(); }} onKeyDown={event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    }}>
      {expanded && <div className="screenshot-dialog-content"><div className="screenshot-dialog-header"><span>{project.name} / SCREENSHOTS</span><button autoFocus onClick={() => dialog.current.close()} aria-label="Close screenshot gallery"><X size={22}/></button></div>
        <img className="expanded-screenshot" src={selected.src} alt={selected.alt} width={selected.width} height={selected.height}/>
        <div className="screenshot-dialog-footer"><button onClick={() => step(-1)} aria-label="Previous screenshot" disabled={images.length < 2}><ChevronLeft size={20}/></button><p aria-live="polite">{selected.caption}<small>{index + 1} / {images.length}</small></p><button onClick={() => step(1)} aria-label="Next screenshot" disabled={images.length < 2}><ChevronRight size={20}/></button></div>
      </div>}
    </dialog>
  </>;
}
