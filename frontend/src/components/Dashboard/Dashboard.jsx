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

    const clientes = `Total de clientes: ${user.contacts}`
  return (
    <div className="dashboard">

  <div class="div1">
    <h3>Clientes Activos</h3>
    <p>{clientes}</p>
  </div>


<div class="div2">
  <h3>Ingresos este mes</h3>
  <p>+35%</p>
  <p>$455.000</p>
</div>

<div class="div3">
  <h3>Portafolio CMS</h3>
  <img className="portafolio" src={portfolio} alt="portafolio" />
  <p>Sitio: gonzalomolina</p>
</div>

<div class="div4">
  <h3>Tareas pendientes <FaCheck/></h3>
<p>Llamar a Cliente</p>
<p>Revisar contrato</p>
<p>Enviar reporte</p>
</div>
<div class="div5"> 
  <h3>Proyectos Activos</h3>
<p>Pendientes: 2</p>
<p>En progreso: 5</p>
<p>Completados: 1</p>
</div>
<div class="div6">
  <h2>Tus integraciones</h2>
  <div className="integraciones_dashboard">
    <img src={mercadopago} alt='icono'/>
    <img src={stripe} alt='icono'/>
    <img src={notion} alt='icono'/>
    <img src={gmail} alt='icono'/>
  </div>
</div>
      
        <div className="div7">
        <h3>Time Tracker <FaClock/> </h3>
        <p>Hoy: 2:45:13</p>
        </div>
  </div>
  );
};

export default Dashboard;
