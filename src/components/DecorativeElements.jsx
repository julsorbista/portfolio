export default function DecorativeElements() {
  return <div className="orbital-art" aria-hidden="true">
    <svg className="chrome-orbit" viewBox="0 0 600 580" fill="none">
      <defs>
        <linearGradient id="chrome" x1="80" y1="60" x2="480" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset=".16" stopColor="#94afc4"/><stop offset=".29" stopColor="#253647"/><stop offset=".4" stopColor="#e9f6ff"/><stop offset=".48" stopColor="#69859a"/><stop offset=".55" stopColor="#121d29"/><stop offset=".68" stopColor="#b1cde1"/><stop offset=".8" stopColor="#f3faff"/><stop offset="1" stopColor="#3b5266"/></linearGradient>
        <linearGradient id="edge"><stop stopColor="#cce8ff"/><stop offset=".5" stopColor="#233c53"/><stop offset="1" stopColor="#e0f3ff"/></linearGradient>
        <radialGradient id="sphere" cx=".32" cy=".22" r=".8"><stop stopColor="#fff"/><stop offset=".2" stopColor="#bfd4e4"/><stop offset=".45" stopColor="#354b60"/><stop offset=".65" stopColor="#0e1824"/><stop offset=".85" stopColor="#8baac4"/><stop offset="1" stopColor="#263c50"/></radialGradient>
      </defs>
      <circle cx="300" cy="290" r="208" stroke="#7da7d9" strokeOpacity=".15" strokeDasharray="3 9"/>
      <ellipse cx="300" cy="290" rx="256" ry="80" transform="rotate(-38 300 290)" stroke="url(#edge)" strokeWidth="2"/>
      <ellipse cx="300" cy="290" rx="192" ry="104" transform="rotate(48 300 290)" stroke="url(#chrome)" strokeWidth="37"/>
      <ellipse cx="300" cy="290" rx="192" ry="104" transform="rotate(48 300 290)" stroke="#e1f0ff" strokeOpacity=".4" strokeWidth="1"/>
      <circle cx="300" cy="290" r="92" fill="url(#sphere)"/>
      <ellipse cx="300" cy="290" rx="220" ry="86" transform="rotate(-31 300 290)" stroke="url(#chrome)" strokeWidth="26"/>
      <ellipse cx="300" cy="290" rx="220" ry="86" transform="rotate(-31 300 290)" stroke="#e8f4ff" strokeOpacity=".5"/>
      <path d="M467 95 Q466 128 438 135 Q466 138 474 171 Q476 140 504 131 Q475 128 467 95Z" fill="url(#chrome)"/>
      <circle cx="117" cy="394" r="12" fill="url(#sphere)"/>
    </svg>
    <span className="tech-tag tag-html"><span>〈/〉</span> HTML / CSS</span>
    <span className="tech-tag tag-js"><b>JS</b> JavaScript</span>
    <span className="art-coordinate">FIG. 01 — IDEAS IN ORBIT</span>
  </div>;
}
