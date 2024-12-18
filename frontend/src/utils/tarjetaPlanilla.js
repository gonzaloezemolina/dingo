import React from 'react';
import { Templates } from '../components/Templates';
import '../estilos/global.css';

const plantillas = [
  {
    id: 1,
    titulo: "Portafolio Moderno",
    descripcion: "Una plantilla de portafolio elegante y responsiva para mostrar tu trabajo.",
    tipo: "Portafolio Web",
    urlImagen: "/placeholder.svg?height=160&width=280",
    estaBloqueada: true
  },
  {
    id: 2,
    titulo: "Email Profesional",
    descripcion: "Una plantilla de email para enviar propuestas pulidas a los clientes.",
    tipo: "Plantilla de Email",
    urlImagen: "/placeholder.svg?height=160&width=280",
    estaBloqueada: true
  },
  {
    id: 3,
    titulo: "Presupuesto Detallado",
    descripcion: "Una plantilla de presupuesto completa para desglosar los costos del proyecto.",
    tipo: "Plantilla de Presupuesto",
    urlImagen: "/placeholder.svg?height=160&width=280",
    estaBloqueada: false
  },
  {
    id: 4,
    titulo: "Cronograma del Proyecto",
    descripcion: "Una plantilla de cronograma visual para mapear los hitos del proyecto.",
    tipo: "Gestión de Proyectos",
    urlImagen: "/placeholder.svg?height=160&width=280",
    estaBloqueada: true
  },
  {
    id: 5,
    titulo: "Plantilla de Factura",
    descripcion: "Una plantilla de factura profesional para facturar a los clientes.",
    tipo: "Finanzas",
    urlImagen: "/placeholder.svg?height=160&width=280",
    estaBloqueada: true
  },
  {
    id: 6,
    titulo: "Incorporación de Clientes",
    descripcion: "Una plantilla para incorporar suavemente a nuevos clientes a tus servicios.",
    tipo: "Gestión de Clientes",
    urlImagen: "/placeholder.svg?height=160&width=280",
    estaBloqueada: true
  }
];

export default function PaginaPlantillas() {
  return (
    <div className="contenedor">
      <h1>Plantillas CRM para Freelancers</h1>
      <div className="cuadricula-plantillas">
        {plantillas.map((plantilla) => (
          <Templates
            key={plantilla.id}
            titulo={plantilla.titulo}
            descripcion={plantilla.descripcion}
            tipo={plantilla.tipo}
            urlImagen={plantilla.urlImagen}
            estaBloqueada={plantilla.estaBloqueada}
          />
        ))}
      </div>
    </div>
  );
}

