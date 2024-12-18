import React from 'react';
import './Dashboard.css';
import { FaClock, FaDollarSign,FaCheck } from 'react-icons/fa'; // Font Awesome Icons
import { MdOutlineCalendarToday } from 'react-icons/md'; 
// import Calendar from '../Calendario/Calendario';

const Dashboard = ({ user, contacts }) => {
  const portfolio = './paraeldashboard.png'
    const mercadopago = './mercadopago.png'
    const notion = './notion.png'
    const stripe = './stripe.webp'
    const gmail = './gmail.png'

    // const clientes = `Total de clientes: ${user.contacts}`
  return (
    <div className="dashboard">

  <div class="div1">
    <h3>Clientes Activos</h3>
    0
  </div>


<div class="div2">
  <h3>Ingresos este mes</h3>
  <p>%0</p>
  <p>$0</p>
</div>

<div class="div3">
  <h3>Portafolio CMS</h3>
  <p>No tienes sitio </p>
</div>

<div class="div4">
  <h3>Tareas pendientes <FaCheck/></h3>
<p>No tienes tareas </p>
</div>
<div class="div5"> 
  <h3>Proyectos Activos</h3>
<p>Pendientes:0 </p>
<p>En progreso:0</p>
<p>Completados:0</p>
</div>
<div class="div6">
  <h2>Tus integraciones</h2>
  <div className="integraciones_dashboard">
 <p>No tienes integraciones</p>
  </div>
</div>
      
        <div className="div7">
        <h3>Time Tracker <FaClock/> </h3>
        <p>Hoy: 00:00:00 </p>
        </div>
  </div>
  );
};

export default Dashboard;
