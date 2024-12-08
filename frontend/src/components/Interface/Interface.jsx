import React from 'react'
import { useEffect,useState } from 'react';
import './Interface.css';
import '../SideBar/SideBar.css'

const Interface = () => {

  const [sidebarColor, setSidebarColor] = useState('#f37221');

   // Restaurar el color guardado al cargar el componente
   useEffect(() => {
    const savedColor = localStorage.getItem('sidebarColor') || '#f37221';
    setSidebarColor(savedColor);
  }, []);

  // Actualizar el color en el LocalStorage y en el estado
  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSidebarColor(newColor);
    localStorage.setItem('sidebarColor', newColor);
  };


  return (
    <div>
        <button>Cambiar tema</button>
<label class="switch">
    <input type="checkbox"/>
    <span class="slider"></span>
</label>

        <button>Modo minimalista</button>
        <div class="toggle-switch">
  <input class="toggle-input" id="toggle" type="checkbox"/>
  <label class="toggle-label" for="toggle"></label>
</div>

        <button>Cambiar color de barra</button>

        <div className="sidebar-settings">
        <label htmlFor="sidebarColor">Selecciona el color del sidebar:</label>
        <input
          type="color"
          id="sidebarColor"
          name="sidebarColor"
          value={sidebarColor}
          onChange={handleColorChange} // Escucha los cambios
        />
      </div>

        <button>Cambiar fuente de letra</button>
        <select name="Agrandir Grotezk" id="">Agrandir Grotezk
          <option value="">Roboto</option>
          <option value="">Bebas Neue</option>
          <option value="">Rosario</option>
        </select>
        <button>Tamaño de fuente</button>
        <button>Ordenar dashboard</button>
        <button>Desactivar animación de barra</button>
        <button>Interfaz predeterminada</button>
    </div>
  )
}

export default Interface