import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Layout from './components/Layout/Layout'
import Dashboard from './components/Dashboard/Dashboard'
import Contacts from './components/Contacts/Contacts'
import Settings from './components/Settings/Settings'
import Interface from './components/Interface/Interface'
import Bills from './components/Bills/Bills'
import Alerts from './components/Alerts/Alerts'
import Backups from './components/Backups/Backups'
import Security from './components/Security/Security'
import Help from './components/Help/Help'
import Profile from './components/Profile/Profile'
import Tasks from './components/Tasks/Tasks'
import Integrations from './components/Integrations/Integrations'
import TimeTracker from './components/TimeTracker/TimeTracker'
import { Templates } from './components/Templates/Templates';
import Budgets from './components/Budgets/Budgets'
import Email from './components/Email/Email'
import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader'

function App() {

  const [loading, setLoading] = useState(true);

  // Simulamos una carga inicial de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 3 segundos de simulación

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);

  if (loading) {
    return <Loader />; // Mostramos el loader durante la carga
  }


  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Dashboard />} />
            <Route path='contactos' element={<Contacts/>}/>
            <Route path='configuracion' element={<Settings/>}>
              <Route path='ui' element={<Interface/>}/>
              <Route path='bills' element={<Bills/>}/>
              <Route path='alertas' element={<Alerts/>}/>
              <Route path='backups' element={<Backups/>}/>
              <Route path='security' element={<Security/>}/>
              <Route path='help' element={<Help/>}/>
            </Route>
            <Route path='perfil' element={<Profile/>}/>
            <Route path='tareas' element={<Tasks/>}/>
            <Route path='integraciones' element={<Integrations/>}/>
            <Route path='timetracker' element={<TimeTracker/>}/>
            <Route path='templates' element={<Templates/>}/>
            <Route path='presupuestos' element={<Budgets/>}/>
            <Route path='email' element={<Email/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;