import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import './Layout.css'

const Layout = ({user}) => {
  const location = useLocation();

  const titlesAndDescriptions = {
    '/': {
      title: `Bienvenido ${user.userName}`,
      description: 'Dashboard'
    },
    '/contactos': {
      title: 'Lista de clientes',
      description: 'Gestiona tus relaciones'
    },
    '/configuracion': {
      title: 'Configuración',
      description: 'Ajusta tus preferencias'
    },
    '/perfil': {
      title: `Perfil de ${user.userName}`,
      description: 'Detalles de tu cuenta'
    },
    '/tareas':{
      title: 'Lista de tareas',
      description: 'Organiza tus actividades'
    },
    '/configuracion/ui':{
      title:'Interfaz',
      description:'Personaliza tu crm'
    },
    '/configuracion/bills':{
      title:'Planes y facturas',
      description:'Mejora tu plan y mirá tus recibos'
    },
    '/configuracion/alertas':{
      title:'Alertas',
      description:'Gestiona tus notificaciones'
    },
    '/configuracion/backups':{
      title:'Backups',
      description:'Respalda tus datos esenciales'
    },
    '/configuracion/security':{
      title:'Seguridad',
      description:'Protege tu información'
    },
    '/configuracion/help':{
      title:'Soporte al cliente',
      description:'Resuelve tus dudas rápidamente'
    },
    '/integraciones':{
      title:'Integraciones',
      description:'Conecta Dingo con tus aplicaciones favoritas'
    },
  };

  const currentRoute = titlesAndDescriptions[location.pathname];
  const showHeader = Boolean(currentRoute); // Mostrar solo si existe configuración para la ruta

  return (
    <div className='layout'>
        <SideBar/>
            <div className="content">
            {showHeader && ( // Condición para mostrar el encabezado
          <div className="header">
            <h1>{currentRoute.title}</h1>
            <p>{currentRoute.description}</p>
            <div className="line"></div>
          </div>
        )}
                <Outlet/>
            </div>
    </div>
  )
}

export default Layout