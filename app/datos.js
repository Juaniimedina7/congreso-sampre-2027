// Todo el contenido editable del congreso vive acá.

export const congreso = {
  nombre: 'Congreso Internacional de Medicina Prehospitalaria',
  sigla: 'CIMP 2027',
  fecha: 'Fecha a confirmar · 2027', // ej: '14 al 16 de octubre de 2027'
  sede: 'Sede a confirmar', // ej: 'Centro de Convenciones, Buenos Aires'
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
