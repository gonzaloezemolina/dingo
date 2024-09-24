import React from 'react'
import './Profile.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const logout = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/sessions/logout', {
                method:'POST',
                credentials: 'include'
            });
            if (response.status === 200) {
                window.location.replace("http://localhost:8080/login");
            }
        } catch (error) {
            console.error('Error al cerrar sesión', error);
        }
    }

  return (
    <div>
        <h1>Perfil</h1>
        <button onClick={logout}>
            Cerrar sesión
        </button>
    </div>
  )
}

export default Profile