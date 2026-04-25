import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// Drone SVG inline — vista cenital de quadcopter, coherente con la
// estetica monocroma del proyecto. lucide-react no trae icono de dron.
function DroneIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <line x1="7.8" y1="7.8" x2="10.5" y2="10.5" />
      <line x1="16.2" y1="7.8" x2="13.5" y2="10.5" />
      <line x1="7.8" y1="16.2" x2="10.5" y2="13.5" />
      <line x1="16.2" y1="16.2" x2="13.5" y2="13.5" />
      <rect x="10" y="10" width="4" height="4" rx="0.5" />
    </svg>
  );
}

// Carrusel: v1 (la mejor) primero, v2 (más detallada) después.
const SLIDES = [
  {
    id: 'pater-v1',
    label: 'ESQUEMA · v1',
    subtitle: 'Vista resumen',
    file: '/secret/muletia-pater-v1.pdf',
  },
  {
    id: 'pater-v2',
    label: 'ESQUEMA · v2',
    subtitle: 'Vista detallada · profundizar',
    file: '/secret/muletia-pater-v2.pdf',
  },
];

export default function SecretRoom({ onBack }) {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const total = SLIDES.length;

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;700&display=swap';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  // Navegación con teclado: ← → para moverse, Esc para volver.
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'ArrowLeft') {
        setIndex((i) => (i - 1 + total) % total);
      } else if (e.key === 'ArrowRight') {
        setIndex((i) => (i + 1) % total);
      } else if (e.key === 'Escape') {
        onBack?.();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [total, onBack]);

  const display = "'Archivo Black', sans-serif";
  const mono = "'JetBrains Mono', monospace";

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        color: '#f2ede3',
        fontFamily: mono,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <nav
        style={{
          padding: '14px 24px',
          borderBottom: '1px solid #2a2a2a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#f2ede3',
            cursor: 'pointer',
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '0.1em',
            opacity: 0.6,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <ArrowLeft size={14} /> HEFAIA
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <DroneIcon size={18} color="#9d0208" />
          <span style={{ fontFamily: display, fontSize: 16, letterSpacing: '-0.02em' }}>
            HANGAR
          </span>
          <span style={{ fontSize: 10, opacity: 0.45, letterSpacing: '0.2em' }}>
            PARA PAPÁ
          </span>
        </div>

        <span
          style={{
            fontSize: 10,
            opacity: 0.4,
            letterSpacing: '0.15em',
            fontStyle: 'italic',
          }}
        >
          cuidado, que vuelas !!
        </span>
      </nav>

      <div
        style={{
          padding: '14px 24px',
          borderBottom: '1px solid #2a2a2a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', gap: 0 }}>
          {SLIDES.map((s, i) => {
            const isActive = i === index;
            return (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                style={{
                  background: isActive ? '#f2ede3' : 'transparent',
                  color: isActive ? '#0a0a0a' : '#f2ede3',
                  border: '1px solid #f2ede3',
                  padding: '10px 18px',
                  fontFamily: mono,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  borderRight: i === SLIDES.length - 1 ? '1px solid #f2ede3' : 'none',
                  opacity: isActive ? 1 : 0.6,
                  transition: 'opacity 0.15s ease',
                }}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <span style={{ fontSize: 11, opacity: 0.55, letterSpacing: '0.08em' }}>
          {slide.subtitle}
        </span>
      </div>

      <div
        style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <iframe
          key={slide.id}
          src={slide.file}
          title={slide.label}
          style={{
            width: '100%',
            height: 'calc(100vh - 200px)',
            minHeight: 600,
            border: '1px solid #2a2a2a',
            backgroundColor: '#1a1a1a',
          }}
        />
      </div>

      <footer
        style={{
          padding: '14px 24px',
          borderTop: '1px solid #2a2a2a',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 10,
          letterSpacing: '0.1em',
          opacity: 0.35,
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span>
          ← → para navegar · ESC para volver
        </span>
        <span>HEFAIA · MADRID, 2026</span>
      </footer>
    </div>
  );
}

export { DroneIcon };
