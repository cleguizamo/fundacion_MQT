export interface NavItem {
  label: string;
  href: string;
}

export interface Program {
  title: string;
  summary: string;
  detail: string;
  icon: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface Story {
  name: string;
  role: string;
  quote: string;
}

export interface DocumentSummary {
  title: string;
  date: string;
  summary: string;
  highlights: string[];
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Propósito', href: '#proposito' },
  { label: 'Misión', href: '#mision-vision' },
  { label: 'Programas', href: '#programas' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Documentos', href: '#documentos' },
  { label: 'Aliarse', href: '#aliarse' },
  { label: 'Contacto', href: '#contacto' },
];

export const programs: Program[] = [
  {
    title: 'Educación y capacitaciones',
    summary: 'Talleres prácticos para abrir oportunidades reales.',
    detail: 'Alfabetización digital, refuerzo escolar, habilidades para la vida y rutas de formación.',
    icon: 'book-open',
  },
  {
    title: 'Ayuda social',
    summary: 'Respuesta cercana a necesidades urgentes de familias vulnerables.',
    detail: 'Jornadas solidarias, acompañamiento psicosocial y gestión de apoyos esenciales.',
    icon: 'heart-hand',
  },
  {
    title: 'Programas comunitarios',
    summary: 'Proyectos hechos con líderes locales, no impuestos desde afuera.',
    detail: 'Encuentros barriales, redes de cuidado, cultura ciudadana y prevención comunitaria.',
    icon: 'people',
  },
  {
    title: 'Emprendimiento y empleo',
    summary: 'Formación para generar ingresos con autonomía.',
    detail: 'Mentorías, orientación laboral, economía familiar y fortalecimiento de ideas productivas.',
    icon: 'briefcase',
  },
  {
    title: 'Jóvenes y familias',
    summary: 'Acompañamiento para construir proyectos de vida sostenibles.',
    detail: 'Escuelas para familias, liderazgo juvenil, permanencia educativa y protección integral.',
    icon: 'spark',
  },
];

export const impactMetrics: ImpactMetric[] = [
  { value: '5', label: 'líneas de acción social' },
  { value: '120+', label: 'horas de formación proyectadas' },
  { value: '18', label: 'alianzas comunitarias por activar' },
  { value: '1', label: 'red humana con manos listas' },
];

export const stories: Story[] = [
  {
    name: 'Ruta educativa',
    role: 'Niñez y permanencia escolar',
    quote: 'Creamos espacios donde aprender vuelve a sentirse posible, cercano y acompañado.',
  },
  {
    name: 'Economía familiar',
    role: 'Emprendimiento de barrio',
    quote: 'Convertimos habilidades cotidianas en ideas productivas con método, mentoría y dignidad.',
  },
  {
    name: 'Tejido comunitario',
    role: 'Apoyo a familias vulnerables',
    quote: 'La ayuda social se organiza con escucha, seguimiento y participación de la comunidad.',
  },
];

export const documents: DocumentSummary[] = [
  {
    title: 'Acta de Asamblea General Extraordinaria No. 003',
    date: '22 de mayo de 2026',
    summary:
      'Registra la reunión de la Asamblea General de Fundadores en Villanueva, Casanare, con quórum total y aprobación unánime de los estados financieros 2025 y del proyecto de reinversión del excedente neto.',
    highlights: [
      'Ingreso total aprobado: $560.000.000.',
      'Excedente neto aprobado: $125.000.000.',
      'Reinversión 2026 destinada a aula, becas y herramientas virtuales.',
    ],
    href: '/docs/acta-asamblea-extraordinaria-003.pdf',
  },
  {
    title: 'Estados Financieros Actualizados 2025',
    date: 'Cierre al 31 de diciembre de 2025',
    summary:
      'Presenta el estado de resultados integral y la situación financiera de la Fundación, con ingresos operativos, egresos procedentes, activos, pasivos, patrimonio y notas de cierre fiscal.',
    highlights: [
      'Ingresos operativos: $560.000.000.',
      'Egresos procedentes: $435.000.000.',
      'Total activos: $555.000.000 y patrimonio: $545.000.000.',
    ],
    href: '/docs/estados-financieros-2025.pdf',
  },
];
