import companyImg from './../assets/images/Sin título.jpeg'
import defaultCompanyImg from './../assets/images/company.webp'

export const experiences = [
  {
    company: "Aythen",
    role: "Fullstack | Freelance",
    img: defaultCompanyImg,
    period: "Enero 2026 - Actualidad",
    intro: "Desarrollo Fullstack centrado en la resolución de problemas críticos en entornos SaaS y mejora continua de la arquitectura",
    achievements: [
      {
        title: "Optimización de performance",
        description: "Implementé estrategias de In-Memory Caching y Request Deduplication, logrando una reducción del 60% en los tiempos de respuesta del backend en secciones críticas."
      },
      {
        title: "Refactorización y modularización",
        description: "Modularicé componentes, separando lógica en estructuras re utilizables y eliminando codigo duplicado"
      },
      {
        title: "Arquitectura y escalabilidad",
        description: "Participé en la mejora de la arquitectura del sistema para facilitar la escalabilidad y el mantenimiento"
      }
    ]
  },
  {
    company: "APX 360",
    role: "Backend | Freelance",
    img: companyImg,
    period: "Septiembre 2025 - Enero 2026 ",
    intro: "Liderazgo del desarrollo backend en el ciclo de vida completo de MVPs y sistemas escalables en producción.",
    achievements: [
    {
      title: "Optimización y escalabilidad",
      description: "Reducí los tiempos de respuesta de 15s a 5s mediante optimización de acceso a datos y estrategias de paginación eficiente (cursor-based)."
    },
    {
      title: "Arquitectura en tiempo real",
      description: "Implementé comunicación bidireccional con Socket.io para manejar flujos de datos masivos sin sobrecargar la base de datos."
    },
    {
      title: "Integraciones clave de negocio",
      description: "Integré pagos con Stripe (Billing y Payment) y servicios de IA generativa con OpenAI para funcionalidades dinámicas."
    }
  ]
  }
];