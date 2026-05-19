// ============================================================
//  data/portfolio.js  —  Fuente única de verdad del portafolio
//  Edita este archivo para actualizar cualquier sección
// ============================================================

export const personal = {
  name:      'Jesús Alejandro Rodríguez Medina',
  nameShort: 'Jesús A. Rodríguez',
  handle:    'jesusrodriguez.dev',              // ← para URLs personalizadas (GitHub, LinkedIn)
  title:     'Cybersecurity Intern | AppSec & Cloud Security | Student at Universidad ONMEX | Fullstack Background (React & Node.js) | AWS Enthusiast',
  location:  'Iztapalapa, CDMX, México',
  english:   'B2 — Upper-Intermediate',
  email:     'acuartnest@gmail.com',      // ← cambia por tu email real
  linkedin:  'https://www.linkedin.com/in/jes%C3%BAs-alejandro-rodr%C3%ADguez-medina-77152825b/',
  github:    'https://github.com/Alekey2001',           // ← agrega tu usuario de GitHub
  company:   'https://aiaco.netlify.app/',
  cvFile:    '/CV_JesusAlejandro_EN.pdf',        // ← sube tu CV a /public
  openTo:    ['SOC Analyst', 'AppSec Intern', 'Cloud Security', 'DevSecOps'],
  remote:    true,
  available: true,
}

export const about = `Estudiante de Ciberseguridad en la Universidad ONMEX con más de 2 años de experiencia práctica en desarrollo Fullstack y Mobile. Mi enfoque profesional se centra en la Seguridad en Aplicaciones (AppSec) y DevSecOps: asegurar que el código no solo funcione de forma óptima, sino que sea resistente a ataques estructurales.

Tengo experiencia implementando arquitecturas seguras en la nube (AWS EC2, IAM), mitigando riesgos basados en OWASP Top 10 y realizando análisis de vulnerabilidades con herramientas como Nmap y Nessus.

Busco activamente prácticas o pasantías en áreas de SOC, Consultoría de Seguridad, AppSec o Cloud Security — presencial o remoto.`

export const stats = [
  { value: '2+',  label: 'Años exp.'  },
  { value: 'B2',  label: 'English'    },
  { value: '3',   label: 'Certs'      },
  { value: 'AWS', label: 'Cloud'      },
]

export const skillBars = [
  { label: 'JavaScript / Node.js',    pct: 90 },
  { label: 'React / React Native',    pct: 85 },
  { label: 'AppSec / OWASP',          pct: 75 },
  { label: 'AWS / Cloud Security',    pct: 70 },
  { label: 'Kali Linux / Pentesting', pct: 72 },
]

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    color: 'amber',
    skills: ['React.js', 'React Native', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    title: 'Backend',
    color: 'amber',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Java', '.NET Framework'],
  },
  {
    id: 'appsec',
    title: 'AppSec & DevSecOps',
    color: 'red',
    skills: ['Burp Suite', 'OWASP Top 10', 'SAST/DAST', 'Nmap', 'Nessus', 'Fail2ban', 'DevSecOps', 'CI/CD Seguro'],
  },
  {
    id: 'cloud',
    title: 'Cloud & AWS',
    color: 'blue',
    skills: ['Amazon EC2', 'AWS IAM', 'Security Groups', 'Seguridad AWS', 'Microsoft Azure', 'Azure DevOps', 'CCSP'],
  },
  {
    id: 'offensive',
    title: 'Herramientas ofensivas',
    color: 'red',
    skills: ['Kali Linux', 'Wireshark', 'SSH Client', 'Hacking Ético', 'Log Monitoring', 'Análisis Malware'],
  },
  {
    id: 'devops',
    title: 'Scripting & DevOps',
    color: 'green',
    skills: ['Python', 'Bash', 'PowerShell', 'Git / GitHub', 'Linux', 'CI/CD', 'SDLC'],
  },
]

export const experience = [
  {
    id: 'analyst',
    role: 'Analista de Seguridad',
    company: 'AIACO',
    companyUrl: 'https://aiaco.netlify.app',
    period: 'abr. 2026 — may. 2026',
    location: 'Iztapalapa, CMX',
    active: true,
    description: 'Revisiones de seguridad web y escaneo de vulnerabilidades en entornos reales de clientes con Nmap y Nessus. Elaboración de reportes formales de remediación bajo metodología OWASP Top 10.',
    tags: ['Nmap', 'Nessus', 'OWASP Top 10', 'Pentesting Web', 'Reportes'],
  },
  {
    id: 'fullstack',
    role: 'Fullstack & Mobile Developer',
    company: 'AIACO',
    companyUrl: 'https://aiaco.netlify.app',
    period: 'ene. 2024 — may. 2026',
    location: 'Iztapalapa, CDMX',
    active: false,
    description: 'Desarrollo de aplicaciones web responsivas y funcionalidades backend con JavaScript y Node.js. Integración de APIs con arquitecturas seguras. Evaluaciones de seguridad con Nmap, Wireshark y Kali Linux. Workflows DevSecOps en proyectos de producción.',
    tags: ['React', 'React Native', 'Node.js', 'AWS EC2', 'Kali Linux', 'Wireshark', 'DevSecOps', 'Firebase', 'MongoDB'],
  },
  {
    id: 'network',
    role: 'Implementación de Seguridad en Red',
    company: 'AIACO',
    companyUrl: 'https://aiaco.netlify.app',
    period: '2024',
    location: 'CDMX',
    active: false,
    description: 'Configuración de controles de seguridad en infraestructura de red. Gestión de IAM en AWS, Security Groups y hardening de servidores Linux. Implementación de Fail2ban y monitoreo de logs para detección de intrusiones.',
    tags: ['AWS IAM', 'Security Groups', 'Fail2ban', 'Linux Hardening', 'Log Monitoring'],
  },
]

export const education = [
  {
    id: 'onmex',
    degree: 'Licenciatura en Ciberseguridad',
    institution: 'Universidad ONMEX',
    period: 'nov. 2024 — mar. 2026',
    focus: 'Seguridad ofensiva, redes y protección en la nube',
    subjects: [
      'Hacking Ético', 'Seguridad en la Nube', 'Análisis de Malware',
      'Gestión de Riesgos', 'Seguridad de Redes', 'Python / Bash',
      'Configuración de Servidores', 'TCP/IP', 'Active Directory',
    ],
  },
]

export const certifications = [
  {
    id: 'ibm',
    name: 'Cybersecurity Fundamentals',
    issuer: 'IBM',
    date: 'feb. 2024',
    emoji: '🛡️',
  },
  {
    id: 'google',
    name: 'Desarrollo de Apps Móviles',
    issuer: 'Google',
    date: 'may. 2024',
    emoji: '📱',
  },
  {
    id: 'fcc',
    name: 'JS Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'mar. 2024',
    emoji: '⚡',
  },
]

export const navLinks = [
  { label: 'about',      href: '#about'      },
  { label: 'skills',     href: '#skills'     },
  { label: 'experience', href: '#experience' },
  { label: 'education',  href: '#education'  },
  { label: 'contact',    href: '#contact'    },
]