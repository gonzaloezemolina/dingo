import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, contacts }) => {
  return (
    <div className="dashboard">
      {/* <h2>¡Bienvenido de nuevo, {user?.userName || 'Usuario'}!</h2>
      <p>Aquí tienes una visión general de tu CRM.</p> */}
      
      <div className="dashboard-widgets">
        {/* Ejemplo de widgets */}
        <div className="widget">
          <h3>Clientes activos</h3>
          <p>10</p>
        </div>
        <div className="widget">
          <h3>Tareas pendientes</h3>
          <p>5</p>
        </div>
        <div className="widget">
          <h3>Proyectos</h3>
          <p>3</p>
        </div>
        <div className="widget">
          <h3>Pipeline</h3>
          <p>$2,000</p>
        </div>
        <div className="widget">
          <h3>Ingresos este mes</h3>
          <p>$2,000</p>
        </div>
        <div className="widget">
          <h3>Automatizaciones</h3>
        </div>
        <div className="widget">
          <h3>Insights</h3>
        </div>
        <div className="widget">
          <h3>Calendario</h3>
        </div>
        <div className="widget">
          <h3>TimeTracker</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
