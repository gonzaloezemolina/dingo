import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div>
        <Link to={'/perfil'}>
            <button>
                Ir a perfil
            </button>
        </Link>
    </div>
  )
}

export default Settings