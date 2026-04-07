import companyImg from './../assets/images/Sin título.jpeg'
import defaultCompanyImg from './../assets/images/company.webp'

export const experiences = [
  {
    company: "Aythen",
    role: "Fullstack | Freelance",
    img: defaultCompanyImg,
    period: "Enero - Actualidad",
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
    period: "Septiembre 2025 - Enero ",
    intro: "Liderazgo del desarrollo backend en el ciclo de vida completo de MVPs y sistemas escalables en producción.",
    achievements: [
      {
        title: "Optimización de performance",
        description: "Reduje los tiempos de respuesta de 15 a 5 segundos mediante el refinamiento de la lógica de acceso a datos."
      },
      {
        title: "Arquitectura de comunicación",
        description: "Implementé sistemas de comunicación bidireccional con Socket.io, optimizando el flujo de datos masivos y evitando la sobrecarga de la base de datos."
      },
      {
        title: "Gestión de pagos y suscripciones",
        description: "Integré soluciones de pago robustas con Stripe Billing y Stripe Payment para pagos únicos seguros."
      },
      {
        title: "Eficiencia en Navegación de Datos",
        description: "Implementé estrategias de Cursor-based pagination para manejar grandes volumenes de datos sin pérdida de performance."
      },
      {
        title: "Integración de IA Generativa",
        description: "Integré la API de OpenAI para la creación de contenido dinámico."
      }
    ]
  }
];