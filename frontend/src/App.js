import './App.css';
import Profile from './components/Profile/Profile'
import Layout from './components/Layout/Layout'
import Settings from './components/Settings/Settings';
import Dashboard from './components/Dashboard/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='configuracion' element={<Settings/>}/>
        <Route path='perfil' element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
