import './App.css';
import Profile from './components/Profile/Profile'
import Layout from './components/Layout/Layout'
import Settings from './components/Settings/Settings';
import Loader from './components/Loader/Loader';
import { UserProvider } from './context/UserContext';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Bills from './components/Bills/Bills';
import Contacts from './components/Contacts/Contacts';
import Tasks from './components/Tasks/Tasks';
import Interface from './components/Interface/Interface';
import Integrations from './components/Integrations/Integrations';
import TimeTracker from './components/TimeTracker/TimeTracker';
import Dashboard from './components/Dashboard/Dashboard';
import Security from './components/Security/Security';
import Help from './components/Help/Help';
import Backups from './components/Backups/Backups';
import Alerts from './components/Alerts/Alerts';
import Templates from './components/Templates/Templates'
import Budgets from './components/Budgets/Budgets';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://dingo-kszy.onrender.com/api/users/usuario', {
          method: 'GET',
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          // No es un error crítico si no se obtienen datos de usuario
          console.log('No se pudieron obtener los datos de usuario');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        // Siempre termina el estado de carga
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Si aún está cargando, muestra el loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout user={user}/>}>
            {/* Ruta de inicio condicional */}
            <Route index element={user ? <Dashboard user={user} /> : <Navigate to="https://dingo-kszy.onrender.com/login" />} />
            
            {/* Rutas protegidas */}
            <Route 
              path='contactos' 
              element={user ? <Contacts/> : <Navigate to="https://dingo-kszy.onrender.com/login" />}
            />
            <Route 
              path='configuracion' 
              element={user ? <Settings/> : <Navigate to="https://dingo-kszy.onrender.com/login" />}
            >
              <Route path='ui' element={<Interface/>}/>
              <Route path='bills' element={<Bills/>}/>
              <Route path='alertas' element={<Alerts/>}/>
              <Route path='backups' element={<Backups/>}/>
              <Route path='security' element={<Security/>}/>
              <Route path='help' element={<Help/>}/>
            </Route>
            {/* Continúa con el resto de las rutas similares */}
            <Route path='perfil' element={<Profile/>}/>
          <Route path='tareas' element={<Tasks/>}/>
          <Route path='integraciones' element={<Integrations/>}/>
          <Route path='timetracker' element={<TimeTracker/>}/>
          <Route path='templates' element={<Templates/>}/>
          <Route path='presupuestos' element={<Budgets/>}/>
            <Route 
              path='perfil' 
              element={user ? <Profile/> : <Navigate to="/login" />}
            />
            {/* ... otras rutas ... */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;