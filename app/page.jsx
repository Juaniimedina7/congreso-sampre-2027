import { congreso, auspiciantes, ejes, actividades, cifras, aranceles } from './datos';

const preinscripcion = `mailto:${congreso.email}?subject=${encodeURIComponent('Preinscripción CIMP 2027')}`;
const auspiciar = `mailto:${congreso.email}?subject=${encodeURIComponent('Quiero auspiciar CIMP 2027')}`;
const trabajos = `mailto:${congreso.email}?subject=${encodeURIComponent('Trabajos científicos CIMP 2027')}`;

function Estrella({ size = 200, sol = true }) {
  // Estrella de la vida con la franja celeste-blanca-celeste y el sol de mayo, como en el logo.
  return (
    <svg viewBox="-100 -100 200 200" width={size} height={size} aria-hidden="true">
      <defs>
        <clipPath id="estrella">
          {[0, 60, 120].map((r) => (
            <rect key={r} x="-24" y="-92" width="48" height="184" rx="5" transform={`rotate(${r})`} />
          ))}
        </clipPath>
      </defs>
      {[0, 60, 120].map((r) => (
        <rect key={r} x="-24" y="-92" width="48" height="184" rx="5" fill="#1b1a80" stroke="#1b1a80" strokeWidth="10" transform={`rotate(${r})`} />
      ))}
      <g clipPath="url(#estrella)">
        <rect x="-100" y="-100" width="200" height="200" fill="#3cb6e3" />
        <rect x="-100" y="-22" width="200" height="44" fill="#fff" />
      </g>
      {sol && (
        <g>
          {Array.from({ length: 16 }, (_, i) => (
            <path key={i} d="M0 -12 L3 -24 L-3 -24 Z" fill="#f5b400" transform={`rotate(${i * 22.5})`} />
          ))}
          <circle r="12" fill="#f5b400" stroke="#d48f00" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}

const iconos = {
  trauma: <path d="M8 3h8v5h5v8h-5v5H8v-5H3V8h5z" />,
  rcp: <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11zM5 12h4l1.5-3 3 6 1.5-3h4" />,
  despacho: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  desastre: <path d="M12 3l10 17H2zM12 10v4M12 17v.5" />,
  rescate: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM5 5l3.5 3.5M19 5l-3.5 3.5M5 19l3.5-3.5M19 19l-3.5-3.5" />,
  pediatria: <path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 22v-7l-2-4 5-2h6l5 2-2 4v7M9 22v-5h6v5" />,
};

function Icono({ nombre }) {
  return (
    <span className="icono">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {iconos[nombre]}
      </svg>
    </span>
  );
}

function Pulso() {
  // Trazo de ECG que cruza el hero: el único movimiento automático de la página.
  return (
    <svg className="pulso" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 70 H380 l18 -10 l14 10 H470 l14 -60 l18 100 l14 -60 h20 l16 -14 l18 14 H760 l14 -60 l18 100 l14 -60 h20 l16 -14 l18 14 H1200"
        fill="none"
        stroke="url(#pulsoGrad)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="pulsoGrad" x1="0" x2="1">
          <stop offset="0" stopColor="#f5b400" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffcf3f" />
          <stop offset="1" stopColor="#3cb6e3" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Marquesina() {
  const items = auspiciantes.map((a, i) => {
    const contenido = a.logo ? <img src={a.logo} alt={a.nombre} /> : <span>{a.nombre}</span>;
    return (
      <li key={i}>
        {a.url ? <a href={a.url} target="_blank" rel="noopener noreferrer">{contenido}</a> : contenido}
      </li>
    );
  });
  return (
    <section className="auspiciantes" aria-label="Auspiciantes">
      <p className="auspiciantes-titulo">Auspician el congreso</p>
      <div className="marquesina">
        <ul>{items}</ul>
        <ul aria-hidden="true">{items}</ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="pagina">
      <header className="hero" id="inicio">
        <nav className="nav">
          <a href="#inicio" className="nav-logo">
            <img src="/logo-sampre.jpg" alt="SAMPRE — Sociedad Argentina de Medicina Prehospitalaria" />
          </a>
          <ul className="nav-links">
            <li><a href="#ejes">Ejes temáticos</a></li>
            <li><a href="#programa">Programa</a></li>
            <li><a href="#aranceles">Aranceles</a></li>
            <li><a href="#trabajos">Trabajos científicos</a></li>
            <li><a href="#auspiciar">Auspiciar</a></li>
          </ul>
          <a className="btn-borde" href="https://www.sampre.com.ar" target="_blank" rel="noopener noreferrer">sampre.com.ar</a>
        </nav>

        <div className="hero-cuerpo">
          <div className="hero-texto">
            <p className="hero-sigla">{congreso.sigla}</p>
            <h1>{congreso.nombre}</h1>
            <p className="hero-bajada">
              El congreso oficial de la Sociedad Argentina de Medicina Prehospitalaria reúne a quienes atienden la emergencia
              donde ocurre: en la calle, en la ambulancia y en la central de despacho.
            </p>
            <dl className="hero-datos">
              <div><dt>Cuándo</dt><dd>{congreso.fecha}</dd></div>
              <div><dt>Dónde</dt><dd>{congreso.sede}</dd></div>
            </dl>
            <div className="hero-acciones">
              <a className="btn-sol" href={preinscripcion}>Preinscribirme</a>
              <span className="nota">Te avisamos apenas abra la inscripción.</span>
            </div>
          </div>
          <div className="hero-ilustracion">
            <div className="orbita orbita-1" />
            <div className="orbita orbita-2" />
            <Estrella size={300} />
          </div>
        </div>
        <Pulso />
      </header>

      <Marquesina />

      <section className="teaser" aria-label="Teaser del congreso">
        <video src="/teaser-cimp-2027.mp4" controls playsInline preload="metadata" />
      </section>

      <section className="seccion" id="ejes">
        <h2>Seis ejes, una misma escena</h2>
        <p className="seccion-bajada">El programa se arma junto a los comités científicos de SAMPRE.</p>
        <div className="ejes">
          <div className="ejes-col">
            {ejes.slice(0, 3).map((e) => (
              <article className="tarjeta" key={e.titulo}>
                <Icono nombre={e.icono} />
                <div><h3>{e.titulo}</h3><p>{e.texto}</p></div>
              </article>
            ))}
          </div>
          <div className="ejes-centro"><Estrella size={220} /></div>
          <div className="ejes-col">
            {ejes.slice(3).map((e) => (
              <article className="tarjeta" key={e.titulo}>
                <Icono nombre={e.icono} />
                <div><h3>{e.titulo}</h3><p>{e.texto}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cifras" aria-label="SAMPRE en números">
        {cifras.map((c) => (
          <div key={c.etiqueta}><strong>{c.valor}</strong><span>{c.etiqueta}</span></div>
        ))}
      </section>

      <section className="seccion" id="programa">
        <h2>Qué vas a encontrar</h2>
        <p className="seccion-bajada">El cronograma completo se publica junto con la apertura de inscripción.</p>
        <div className="actividades">
          {actividades.map((a) => (
            <article className="tarjeta tarjeta-simple" key={a.titulo}>
              <h3>{a.titulo}</h3><p>{a.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seccion" id="aranceles">
        <h2>Aranceles</h2>
        <p className="seccion-bajada">Los socios de SAMPRE residentes en Argentina se inscriben sin cargo. La tarifa anticipada vale hasta el 2 de febrero de 2027.</p>
        <div className="tabla-envoltura">
          <table className="aranceles">
            <thead>
              <tr><th scope="col">Categoría</th><th scope="col">Hasta el 2/2/2027</th><th scope="col">En el congreso</th></tr>
            </thead>
            <tbody>
              {aranceles.map((a) => (
                <tr key={a.categoria}>
                  <th scope="row">{a.categoria}</th>
                  <td>{a.anticipado ?? <span className="sin-dato">No aplica</span>}</td>
                  <td>{a.insitu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="aranceles-nota">
          ¿Todavía no sos socio? <a href="https://www.sampre.com.ar/socios" target="_blank" rel="noopener noreferrer">Asociate a SAMPRE</a> y, si residís en Argentina, tu inscripción es sin cargo.
        </p>
      </section>

      <section className="banner" id="trabajos">
        <div>
          <h2>Presentá tu trabajo científico</h2>
          <p>Casos clínicos, investigación y experiencias de servicios de todo el país. Escribinos y te enviamos el reglamento apenas esté disponible.</p>
          <a className="btn-sol" href={trabajos}>Quiero presentar un trabajo</a>
        </div>
        <div className="banner-estrella"><Estrella size={260} sol={false} /></div>
      </section>

      <section className="seccion auspiciar" id="auspiciar">
        <h2>Tu marca en el congreso</h2>
        <p className="seccion-bajada">
          Stands, presencia en la marquesina de auspiciantes y actividades patrocinadas frente a profesionales del sistema
          prehospitalario de Argentina y la región.
        </p>
        <a className="btn-sol" href={auspiciar}>Pedir carpeta de auspicio</a>
      </section>

      <footer className="pie">
        <img src="/logo-sampre.jpg" alt="SAMPRE" width="160" />
        <div>
          <p>Organiza la Sociedad Argentina de Medicina Prehospitalaria.</p>
          <p><a href={`mailto:${congreso.email}`}>{congreso.email}</a></p>
        </div>
        <ul>
          <li><a href="https://www.sampre.com.ar" target="_blank" rel="noopener noreferrer">sampre.com.ar</a></li>
          <li><a href="https://instagram.com/sampre.ar" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://facebook.com/SAMPREoficial" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://youtube.com/@samprearg8206" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href="https://ramp.sampre.com.ar" target="_blank" rel="noopener noreferrer">Revista RAMP</a></li>
        </ul>
      </footer>
    </main>
  );
}
