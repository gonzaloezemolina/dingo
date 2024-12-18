import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Email.css'

const Budgets = () => {
      const {user} = useContext(UserContext);
    const [clientes, setClientes] = useState([]); // Lista de clientes desde la API
    const [selectedClientes, setSelectedClientes] = useState([]); // IDs seleccionados
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [plantilla, setPlantilla] = useState('');
    const [plantillas, setPlantillas] = useState(['default.html']); // Ejemplo de plantillas

    useEffect(() => {
        if (user && user._id) { // Asegúrate de que user._id esté definido
            fetch(`https://dingo-kszy.onrender.com/api/contacts/${user._id}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) { // Verifica que sea un array antes de usarlo
                        setClientes(data);
                    } else {
                        console.error('Los datos recibidos no son válidos:', data);
                    }
                })
                .catch(err => console.error('Error obteniendo contactos:', err));
        }
    }, [user]);

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedClientes.length) {
      alert('Selecciona al menos un cliente');
      return;
    }

    const budgetData = {
      clientes: selectedClientes, // Array de IDs
      descripcion,
      monto,
      plantilla,
    };

    try {
      const response = await fetch(`https://dingo-kszy.onrender.com/api/budgets/budget/${user._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(budgetData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Correo enviado con éxito');
        console.log(result);
      } else {
        alert('Error al crear el presupuesto: ' + result.error);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };





  return (
    <div>
          <div className="budgets">
            <div className="budgets_left">
              <h1>Crea un email</h1>
              <p>Aquí podrás crear, personalizar y enviar emails a tus clientes de forma rápida y sencilla.</p>
              <div className="budgets_btn_container">
                <button className='budgets_btn'>Ver mis emails</button><button  className='budgets_btn'>Personalizar campos</button>
              </div>                    
            </div>
            <div className="budgets_right">
            <form onSubmit={handleSubmit}>
        {/* Selector múltiple de clientes */}
        <label className='seleccionar'>Selecciona a un cliente</label>
        <select
          multiple
          value={selectedClientes}
          onChange={(e) => {
            const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
            setSelectedClientes(selectedOptions);
          }}
        >
          {(clientes || []).map(cliente => (
            <option key={cliente._id} value={cliente._id}>
              {cliente.name} ({cliente.email})
            </option>
          ))}
        </select>

        {/* Descripción */}
        <input
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Describe el contenido"
        ></input>

        {/* Monto */}
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="Monto"
        />

        {/* Plantillas */}
        <select value={plantilla} onChange={(e) => setPlantilla(e.target.value)}>
          <option value="">Selecciona una plantilla</option>
          {plantillas.map((plantilla, index) => (
            <option key={index} value={plantilla}>
              {plantilla}
            </option>
          ))}
        </select>

        <button type="submit" className='ENVIAR'>Enviar correo</button>
      </form>
            </div>
    </div>
    </div>
  )
}

export default Budgets