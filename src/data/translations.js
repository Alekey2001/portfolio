// ============================================================
//  translations.js — Todo el texto del sitio en ES y EN
// ============================================================

export const t = {
  es: {
    // Navbar
    nav: {
      about:      'about',
      skills:     'skills',
      experience: 'experience',
      education:  'education',
      contact:    'contact',
    },

    // Login
    login: {
      title:       'ACCESO REQUERIDO',
      subtitle:    'Sistema de portafolio seguro — autentícate para continuar',
      userLabel:   'usuario',
      passLabel:   'contraseña',
      userHolder:  'ingresa usuario...',
      passHolder:  'ingresa contraseña...',
      button:      'INICIAR SESIÓN',
      loading:     'Verificando credenciales...',
      error:       'Credenciales incorrectas. Acceso denegado.',
     hint: 'Credenciales de acceso para reclutadores:',
    },

    // Hero
    hero: {
      badge:    'Disponible para prácticas y trabajo remoto',
      subtitle: '> Cybersecurity Intern | AppSec & Cloud Security | Fullstack Background (React & Node.js) | DevSecOps | Student at Universidad ONMEX',
      desc:     'Estudiante de Ciberseguridad en ONMEX con +2 años de experiencia real en desarrollo Fullstack y Mobile. Mi foco: código que no solo funciona, sino que es resistente a ataques. Experiencia con AWS, OWASP Top 10, Burp Suite y Nmap.',
      cta1:     'Contactar',
      cta2:     'Ver Experiencia',
      stats: [
        { value: '2+',  label: 'Años exp.'  },
        { value: 'B2',  label: 'English'    },
        { value: '3',   label: 'Certs'      },
        { value: 'AWS', label: 'Cloud'      },
      ],
    },

    // About
    about: {
      tag:   '// 01',
      title: 'Sobre mí',
      p1: 'Estudiante de Ciberseguridad en la Universidad ONMEX con más de 2 años de experiencia práctica en desarrollo Fullstack y Mobile. Mi enfoque profesional se centra en la Seguridad en Aplicaciones (AppSec) y DevSecOps.',
      p2: 'Tengo experiencia implementando arquitecturas seguras en la nube (AWS EC2, IAM), mitigando riesgos basados en OWASP Top 10 y realizando análisis de vulnerabilidades con Nmap y Nessus.',
      p3: 'Busco activamente prácticas o pasantías en áreas de SOC, Consultoría de Seguridad, AppSec o Cloud Security — presencial o remoto.',
      terminal: {
        role:     'Fullstack + AppSec',
        location: 'CDMX, México',
        openTo:   ['SOC Analyst', 'AppSec Intern', 'Cloud Security', 'DevSecOps'],
      },
    },

    // Skills
    skills: {
      tag:   '// 02',
      title: 'Stack técnico',
    },

// Experience
experience: {
  tag:   '// 03',
  title: 'Experiencia',
  jobs: [
    {
      id: 'analyst',
      description: 'Revisiones de seguridad web y escaneo de vulnerabilidades en entornos reales de clientes con Nmap y Nessus. Elaboración de reportes formales de remediación bajo metodología OWASP Top 10.',
    },
    {
      id: 'fullstack',
      description: 'Desarrollo de aplicaciones web responsivas y funcionalidades backend con JavaScript y Node.js. Integración de APIs con arquitecturas seguras. Evaluaciones de seguridad con Nmap, Wireshark y Kali Linux. Workflows DevSecOps en proyectos de producción.',
    },
    {
      id: 'network',
      description: 'Configuración de controles de seguridad en infraestructura de red. Gestión de IAM en AWS, Security Groups y hardening de servidores Linux. Implementación de Fail2ban y monitoreo de logs para detección de intrusiones.',
    },
  ],
},

// Education
education: {
  tag:   '// 04',
  title: 'Educación & Certificaciones',
  degree: 'Licenciatura en Ciberseguridad',
  institution: 'Universidad ONMEX',
  focus: 'Seguridad ofensiva, redes y protección en la nube',
  subjects: [
    'Hacking Ético', 'Seguridad en la Nube', 'Análisis de Malware',
    'Gestión de Riesgos', 'Seguridad de Redes', 'Python / Bash',
    'Configuración de Servidores', 'TCP/IP', 'Active Directory',
  ],
},

    // Contact
    contact: {
      tag:     '// 05',
      title:   '¿Hablamos?',
      desc:    'Busco activamente prácticas en SOC, AppSec, Cloud Security o DevSecOps. Disponible para trabajo remoto. Inglés B2.',
      descHighlight: 'SOC, AppSec, Cloud Security o DevSecOps',
      cv:      'Descargar CV',
    },

    // Footer
    footer: 'AppSec & Fullstack Dev',
  },

  // ── ENGLISH ────────────────────────────────────────────────
  en: {
    // Navbar
    nav: {
      about:      'about',
      skills:     'skills',
      experience: 'experience',
      education:  'education',
      contact:    'contact',
    },

    // Login
    login: {
      title:       'ACCESS REQUIRED',
      subtitle:    'Secure portfolio system — authenticate to continue',
      userLabel:   'username',
      passLabel:   'password',
      userHolder:  'enter username...',
      passHolder:  'enter password...',
      button:      'LOGIN',
      loading:     'Verifying credentials...',
      error:       'Invalid credentials. Access denied.',
      hint: 'Access credentials for recruiters:',
    },

    // Hero
    hero: {
      badge:    'Available for internships & remote work',
      subtitle: '> Cybersecurity Intern | AppSec & Cloud Security | Fullstack Background (React & Node.js) | DevSecOps | Student at Universidad ONMEX',
      desc:     'Cybersecurity student at ONMEX with 2+ years of real experience in Fullstack and Mobile development. My focus: code that not only works, but is resistant to attacks. Experience with AWS, OWASP Top 10, Burp Suite and Nmap.',
      cta1:     'Contact Me',
      cta2:     'View Experience',
      stats: [
        { value: '2+',  label: 'Yrs exp.'  },
        { value: 'B2',  label: 'English'   },
        { value: '3',   label: 'Certs'     },
        { value: 'AWS', label: 'Cloud'     },
      ],
    },

    // About
    about: {
      tag:   '// 01',
      title: 'About Me',
      p1: 'Cybersecurity student at Universidad ONMEX with 2+ years of hands-on experience in Fullstack and Mobile development. My professional focus is on Application Security (AppSec) and DevSecOps.',
      p2: 'I have experience implementing secure cloud architectures (AWS EC2, IAM), mitigating risks based on OWASP Top 10, and performing vulnerability analysis with Nmap and Nessus.',
      p3: 'Actively seeking internships in SOC, Security Consulting, AppSec or Cloud Security — on-site or remote.',
      terminal: {
        role:     'Fullstack + AppSec',
        location: 'CDMX, Mexico',
        openTo:   ['SOC Analyst', 'AppSec Intern', 'Cloud Security', 'DevSecOps'],
      },
    },

    // Skills
    skills: {
      tag:   '// 02',
      title: 'Tech Stack',
    },

  // Experience
experience: {
  tag:   '// 03',
  title: 'Experience',
  jobs: [
    {
      id: 'analyst',
      description: 'Web security reviews and vulnerability scanning in real client environments using Nmap and Nessus. Formal remediation reports under OWASP Top 10 methodology.',
    },
    {
      id: 'fullstack',
      description: 'Developed responsive web applications and backend features using JavaScript and Node.js. API integration with secure architectures. Security assessments with Nmap, Wireshark and Kali Linux. DevSecOps workflows in production projects.',
    },
    {
      id: 'network',
      description: 'Configuration of security controls in network infrastructure. AWS IAM management, Security Groups and Linux server hardening. Fail2ban implementation and log monitoring for intrusion detection.',
    },
  ],
},

// Education
education: {
  tag:   '// 04',
  title: 'Education & Certifications',
  degree: 'Bachelor\'s Degree in Cybersecurity',
  institution: 'Universidad ONMEX',
  focus: 'Offensive security, networking and cloud protection',
  subjects: [
    'Ethical Hacking', 'Cloud Security', 'Malware Analysis',
    'Risk Management', 'Network Security', 'Python / Bash',
    'Server Configuration', 'TCP/IP', 'Active Directory',
  ],
},

    // Contact
    contact: {
      tag:     '// 05',
      title:   'Let\'s Talk?',
      desc:    'Actively seeking internships in SOC, AppSec, Cloud Security or DevSecOps. Available for remote work. English B2.',
      descHighlight: 'SOC, AppSec, Cloud Security or DevSecOps',
      cv:      'Download CV',
    },

    // Footer
    footer: 'AppSec & Fullstack Dev',
  },
}