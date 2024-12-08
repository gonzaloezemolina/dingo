import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './Settings.css'

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settings_navbar">
        <ul>
          <li className='settings_li'>
            <Link to={''}>
              Perfil de usuario
            </Link>
          </li>
          <li className='settings_li'>
            <Link to={'ui'}>
              Personalizar Interfaz
            </Link>
          </li>
          <li className='settings_li'>
          <Link to={'bills'}>
              Facturaciones y suscripciones
            </Link>
          </li>
          <li className='settings_li'>
            <Link to={'backups'}>
              Backups
            </Link>
          </li>
          <li className='settings_li'>
          <Link to={'security'}>
              Seguridad y Permisos
            </Link>
          </li>
          <li className='settings_li'>
          <Link to={'alertas'}>
              Notificaciones
            </Link>
          </li>
          <li className='settings_li'>
          <Link to={'help'}>
              Soporte y Ayuda
            </Link>
          </li>
        </ul>
      </div>
      <div className="settings_container">
        <Outlet/>
      </div>
    </div>
  )
}

export default Settings