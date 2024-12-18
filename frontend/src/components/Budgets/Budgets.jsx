import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Budgets.css'

const Budgets = () => {
      const {user} = useContext(UserContext);
    const [clientes, setClientes] = useState([]); // Lista de clientes desde la API
    const [selectedClientes, setSelectedClientes] = useState([]); // IDs seleccionados
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [plantilla, setPlantilla] = useState('');
    const [plantillas, setPlantillas] = useState(['default.html', 'custom.html']); // Ejemplo de plantillas

    useEffect(() => {
        if (user && user._id) { // Asegúrate de que user._id esté definido
            fetch(`http://localhost:8080/api/contacts/${user._id}`)
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
      const response = await fetch(`http://localhost:8080/api/budgets/budget/${user._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(budgetData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Presupuesto creado con éxito');
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
              <h1>Crea un presupuesto</h1>
              <p>Aquí podrás crear, personalizar y enviar presupuestos a tus clientes de forma rápida y sencilla.</p>
              <div className="budgets_btn_container">
                <button className='budgets_btn'>Ver mis presupuestos</button><button  className='budgets_btn'>Personalizar campos</button>
              </div>                    
            </div>
            <div className="budgets_right">
            <form onSubmit={handleSubmit}>
        {/* Selector múltiple de clientes */}
        <label>Selecciona a un cliente</label>
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
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Describe el servicio o producto"
        ></textarea>

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

        <button type="submit">Crear Presupuesto</button>
      </form>
            </div>
    </div>
    </div>
  )
}

export default Budgets