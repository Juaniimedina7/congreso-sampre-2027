// Todo el contenido editable del congreso vive acá.

export const congreso = {
  nombre: 'Congreso Internacional de Medicina Prehospitalaria',
  sigla: 'CIMP 2027',
  fecha: '21 y 22 de mayo de 2027',
  sede: 'Buenos Aires Marriott, Av. 9 de Julio',
  email: 'info@sampre.com.ar',
};

// Auspiciantes del banner. Sumar el logo en /public/auspiciantes y poner la ruta en `logo`.
// Sin `logo`, se muestra el nombre como texto.
export const auspiciantes = [
  { nombre: 'Tu marca acá' },
  { nombre: 'Tu marca acá' },
  { nombre: 'Tu marca acá' },
  { nombre: 'Tu marca acá' },
  { nombre: 'Tu marca acá' },
  { nombre: 'Tu marca acá' },
  // { nombre: 'Empresa X', logo: '/auspiciantes/empresa-x.png', url: 'https://...' },
];

export const ejes = [
  { titulo: 'Trauma prehospitalario', texto: 'Control de hemorragias, manejo de vía aérea y decisiones en la escena, del PHTLS a la evidencia más reciente.', icono: 'trauma' },
  { titulo: 'Reanimación', texto: 'RCP de alta calidad, cadena de supervivencia y acceso público a la desfibrilación.', icono: 'rcp' },
  { titulo: 'Recepción y despacho', texto: 'Centrales de regulación, triage telefónico y tecnología aplicada a la respuesta.', icono: 'despacho' },
  { titulo: 'Desastres y víctimas múltiples', texto: 'Gestión de riesgos, triage masivo y coordinación entre servicios.', icono: 'desastre' },
  { titulo: 'Búsqueda y rescate', texto: 'Rescate urbano, acuático y en medio agreste. Medicina táctica.', icono: 'rescate' },
  { titulo: 'Pediatría y enfermería', texto: 'El paciente pediátrico en la calle y el rol de enfermería en la emergencia.', icono: 'pediatria' },
];

export const actividades = [
  { titulo: 'Cursos precongreso', texto: 'Formación práctica certificada en los días previos.' },
  { titulo: 'Conferencias magistrales', texto: 'Referentes nacionales e internacionales.' },
  { titulo: 'Talleres y simulación', texto: 'Estaciones prácticas con escenarios realistas.' },
  { titulo: 'Trabajos científicos', texto: 'Presentación de posters y comunicaciones orales.' },
];

export const cifras = [
  { valor: '+1000', etiqueta: 'participantes en CIMP 2025' },
  { valor: '22', etiqueta: 'comités científicos' },
  { valor: 'Cada 2 años', etiqueta: 'el congreso oficial de SAMPRE' },
  { valor: 'Desde 2019', etiqueta: 'formando al sistema prehospitalario' },
];

// `anticipado`: hasta el 2 de febrero de 2027. `null` = solo se abona en el congreso.
export const aranceles = [
  { categoria: 'Residentes argentinos socios de SAMPRE', anticipado: 'Sin cargo', insitu: 'Sin cargo' },
  { categoria: 'Residentes argentinos no socios de SAMPRE', anticipado: '$ 100.000', insitu: '$ 120.000' },
  { categoria: 'Residentes del exterior', anticipado: 'USD 80', insitu: 'USD 100' },
  { categoria: 'Bomberos voluntarios argentinos', anticipado: null, insitu: '$ 60.000' },
  { categoria: 'Estudiantes de carreras terciarias o universitarias afines', anticipado: null, insitu: '$ 60.000' },
];
