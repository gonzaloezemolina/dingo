import './App.css';
import Profile from './components/Profile/Profile'
import Layout from './components/Layout/Layout'
import Settings from './components/Settings/Settings';
import Loader from './components/Loader/Loader';
import { UserProvider } from './context/UserContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
          console.log(data); 
        } else {
          console.log('Error: ', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (load) {
    return <Loader />;
  }
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout user={user}/>}>
          <Route index element={<Dashboard user={user} />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
  </UserProvider>
    </>
  );
}

export default App;
