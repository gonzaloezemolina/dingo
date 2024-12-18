import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import { useUser } from '../../context/UserContext'
import Loader from '../Loader/Loader'
import './Layout.css'

const Layout = () => {
  const { user, isLoading } = useUser();
  const location = useLocation();
  const titlesAndDescriptions = {
    '/': {
      title: user ? `Bienvenido ` : 'Bienvenido',
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
      title: `Perfil`,
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
    // ... resto de tus rutas
    '/integraciones':{
      title:'Integraciones',
      description:'Conecta Dingo con tus aplicaciones favoritas'
    },
  };

  const currentRoute = titlesAndDescriptions[location.pathname];
  const showHeader = Boolean(currentRoute);

  if (isLoading) {
    return <Loader />; // O tu componente de carga
  }

  return (
    <div className='layout'>
        <SideBar/>
            <div className="content">
            {showHeader && (
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