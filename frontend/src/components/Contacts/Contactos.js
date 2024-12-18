import React, { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../../context/UserContext';
import {io} from 'socket.io-client'
import './Contacts.css';

const Contacts = () => {
  const socket = io('http://localhost:8080');
  const {user} = useContext(UserContext);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    project: '',
    preferredChannel: '',
    status: ''
  });

  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setContactsList(data);
      } else {
        console.log('Error: ', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const addContact = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/contacts/newContact/${user._id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Nuevo contacto creado: ', data);
        setContact({
          name: '',
          email: '',
          project: '',
          preferredChannel: '',
          status: ''
        });
        fetchContacts(); // Actualizar lista de contactos
      } else {
        console.log('Error: ', response.statusText);
      }
    } catch (error) {
      console.error('Error al crear contacto: ', error);
    }
  };


  const fileInputRef = useRef(null); // Referencia al input oculto

    // Función para abrir la ventana de archivos
    const openFileSelector = () => {
        fileInputRef.current.click(); // Simula un click en el input
    };

    // Función que se ejecuta cuando el usuario selecciona un archivo
    const handleFileChange = async (e) => {
        const file = e.target.files[0]; // Captura el archivo seleccionado
        if (!file) return; // Si no hay archivo, no hacemos nada

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Realizamos la petición al backend usando fetch
            const response = await fetch(`http://localhost:8080/api/contacts/importCSV/${user._id}`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json(); // Aquí parseas el JSON
            console.log('Resultado:', data);
            alert(`Contactos importados: ${data.count}`);
        } catch (error) {
            console.error('Error subiendo archivo:', error);
            alert('Error al importar contactos');
        }
    };

  return (
    <div>
      <div className="contacts_tools">
        <input className='search' type="search" placeholder='Buscar' />
        <button className='contactBtn'>
          Añadir cliente</button>
        <button className='contactBtn'>Personalizar campos</button>
        <button className='contactBtn' onClick={openFileSelector}>Importar CSV</button>
        <input
                type="file"
                accept=".csv"
                ref={fileInputRef}
                style={{ display: 'none' }} // Lo ocultamos visualmente
                onChange={handleFileChange}
            />
      </div>

{/* Formulario */}

      {/* <h2>Añadir contacto</h2>
      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); addContact(); }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={contact.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="project"
          placeholder="Proyecto"
          value={contact.project}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="preferredChannel"
          placeholder="Canal preferido"
          value={contact.preferredChannel}
          onChange={handleInputChange}
        />
        <select
          type="text"
          name="status"
          placeholder="Estado"
          value={contact.status}
          onChange={handleInputChange}
        />
        <button type="submit">Añadir cliente</button>
      </form> */}


{/* Renderizado */}

{/* 
      { <ul>
        {contactsList.map((contact) => (
          <li key={contact._id}>
            <strong>Nombre:</strong> {contact.name} <br />
            <strong>Email:</strong> {contact.email} <br />
            <strong>Proyecto:</strong> {contact.project} <br />
            <strong>Canal preferido:</strong> {contact.preferredChannel} <br />
            <strong>Estado:</strong> {contact.status} <br />
          </li>
        ))}
      </ul>} */}
    </div>
  );
}

export default Contacts;
