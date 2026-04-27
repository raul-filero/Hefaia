import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import HefaiaLanding from './HefaiaLanding.jsx';
import App from './App.jsx';
import SecretRoom from './SecretRoom.jsx';
import './index.css';

function SuperpoderPage({ onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#080818' }}>
      <div style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #2a2a5a' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none', border: 'none', color: '#d4d4f0', cursor: 'pointer',
            fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.1em',
            opacity: 0.5, display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
        >
          ← HEFAIA
        </button>
      </div>
      <iframe
        src="/superpoder/"
        title="Misión Superpoder"
        style={{ flex: 1, border: 'none', width: '100%' }}
      />
    </div>
  );
}

function EscorialPage({ onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#080808' }}>
      <div style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #222' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none', border: 'none', color: '#f2ede3', cursor: 'pointer',
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em',
            opacity: 0.5, display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
        >
          ← HEFAIA
        </button>
      </div>
      <iframe
        src="https://fileroeco.github.io/elescorial/"
        title="El Escorial"
        style={{ flex: 1, border: 'none', width: '100%' }}
      />
    </div>
  );
}

function PolitropicoPage({ onBack }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh',
      background: '#f9f9f7', fontFamily: "'JetBrains Mono', Georgia, serif",
    }}>
      {/* Header */}
      <div style={{
        padding: '12px 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', borderBottom: '1px solid #e8e8e4',
        background: '#fff',
      }}>
        <button
          onClick={onBack}
          style={{
            background: 'none', border: 'none', color: '#888', cursor: 'pointer',
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            letterSpacing: '0.1em', opacity: 0.6, display: 'flex',
            alignItems: 'center', gap: 6, padding: '4px 0',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
        >
          ← HEFAIA
        </button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}>
            Autoetnografía Clínica · 2026
          </div>
        </div>
        <a
          href="/secret/politropico.pdf"
          download="Autoetnografia_Politropico_Conectivo_Jimenez_Solaz_2026.pdf"
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            letterSpacing: '0.1em', color: '#1a1a2e', textDecoration: 'none',
            border: '1px solid #1a1a2e', padding: '6px 14px',
            opacity: 0.7, transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
        >
          ↓ DESCARGAR PDF
        </a>
      </div>

      {/* Título */}
      <div style={{
        padding: '24px 40px 16px', background: '#fff',
        borderBottom: '1px solid #e8e8e4',
      }}>
        <h1 style={{
          margin: 0, fontSize: 18, fontWeight: 400, letterSpacing: '-0.01em',
          color: '#1a1a2e', fontFamily: 'Georgia, serif', lineHeight: 1.4,
        }}>
          Autoetnografía Clínica de un Sujeto Politrópico Conectivo
        </h1>
        <p style={{
          margin: '6px 0 0', fontSize: 12, color: '#888',
          fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em',
        }}>
          Raúl Jiménez Solaz · Abril 2026
        </p>
      </div>

      {/* PDF embed */}
      <div style={{ flex: 1, overflow: 'hidden', background: '#f0f0ec' }}>
        <object
          data="/secret/politropico.pdf"
          type="application/pdf"
          style={{ width: '100%', height: '100%', border: 'none' }}
        >
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', height: '100%', gap: 16, color: '#888',
            fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
            letterSpacing: '0.1em',
          }}>
            <span>El PDF no puede mostrarse en este navegador.</span>
            <a
              href="/secret/politropico.pdf"
              download
              style={{
                color: '#1a1a2e', border: '1px solid #1a1a2e',
                padding: '10px 20px', textDecoration: 'none', letterSpacing: '0.15em',
              }}
            >
              ↓ DESCARGAR DOCUMENTO
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}

function Root() {
  const [page, setPage] = useState('hefaia');
  // Idioma compartido entre HefaiaLanding y App (Oniros). Default ingles.
  const [lang, setLang] = useState('en');

  if (page === 'oniros') {
    return <App onBack={() => setPage('hefaia')} lang={lang} setLang={setLang} />;
  }
  if (page === 'secret') {
    return <SecretRoom onBack={() => setPage('hefaia')} />;
  }
  if (page === 'escorial') {
    return <EscorialPage onBack={() => setPage('hefaia')} />;
  }
  if (page === 'superpoder') {
    return <SuperpoderPage onBack={() => setPage('hefaia')} />;
  }
  if (page === 'politropico') {
    return <PolitropicoPage onBack={() => setPage('hefaia')} />;
  }
  return (
    <HefaiaLanding
      onEnterOniros={() => setPage('oniros')}
      onEnterSecret={() => setPage('secret')}
      onEnterEscorial={() => setPage('escorial')}
      onEnterSuperpoder={() => setPage('superpoder')}
      onEnterPolitropico={() => setPage('politropico')}
      lang={lang}
      setLang={setLang}
    />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
