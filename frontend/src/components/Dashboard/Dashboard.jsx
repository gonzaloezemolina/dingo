import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Función para obtener los datos del usuario desde la sesión
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/usuario', {
          method: 'GET',
          credentials: 'include' // Para enviar y recibir cookies
        });

        if (response.ok) {
          const data = await response.json(); // Aquí parseamos la respuesta
          setUser(data); // Guardamos los datos del usuario
          console.log(data); // Mostramos los datos en la consola
        } else {
          console.log('Error: ', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Bienvenido {user.userName}</h1>
      <h2>{user.role}</h2>
      <Link to={'/perfil'}>
        <li>Configuración</li>
      </Link>
    </div>
  );
}

export default Dashboard;
