import React from 'react'
import './Dashboard.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  return (
    <div>
      <h1 className='orange'>Bienvenido a Dingo</h1>
      <Link to={'/perfil'}>
        <li>Configuración</li>
      </Link>
    </div>
  )
}

export default Dashboard