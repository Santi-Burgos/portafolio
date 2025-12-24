import companyImg from './../assets/images/icon.png'

export const experienceData = {
  company: "APX 360",
  role: "Backend | Freelance",
  img: companyImg, 
  period: "Septiembre - Actualidad",
  intro: "He participado en el ciclo de vida completo de múltiples proyectos (MVPs y sistemas en producción), asumiendo el liderazgo del desarrollo backend y priorizando la escalabilidad.",
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
};