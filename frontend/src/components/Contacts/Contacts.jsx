import React, { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../../context/UserContext';
import './Contacts.css';

const Contacts = () => {
  const {user} = useContext(UserContext);
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState({
    name: '',
    email: '',
    project: '',
    preferredChannel: '',
    status: ''
  });

  const [modalOpen, setModalOpen] = useState(false);

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
      const response = await fetch(`https://dingo-kszy.onrender.com/api/contacts/newContact/${user._id}`, {
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
            const response = await fetch(`https://dingo-kszy.onrender.com/api/contacts/importCSV/${user._id}`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json(); // Aquí parseas el JSON
            // Verifica si la respuesta contiene contactos
        if (data.contacts) {
          setContacts(data.contacts); // Actualiza el estado de contactos
          console.log('Resultado:', data);
          alert(`Contactos importados: ${data.count}`);
      } else {
          console.error('No se encontraron contactos en la respuesta');
          alert('No se pudieron importar los contactos');
      }
        } catch (error) {
            console.error('Error subiendo archivo:', error);
            alert('Error al importar contactos');
        }
    };





 // Modal para añadir contacto
 const Modal = () => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
      <h2>Añadir contacto</h2>
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
          name="status"
          value={contact.status}
          onChange={handleInputChange}
        >
          <option value="">Seleccione estado</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
          <option value="pendiente">Pendiente</option>
        </select>
        <button type="submit">Añadir contacto</button>
      </form>
    </div>
  </div>
);





  return (
    <div>
      <div className="contacts_tools">
        <input className='search' type="search" placeholder='Buscar' />
        <button className='contactBtn' onClick={() => setModalOpen(true)}>
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


{/* Renderizado */}

{/* Mostrar modal */}
{modalOpen && <Modal />}

{/* Tabla de contactos */}
<div className="contacts_container">
        {contacts.length === 0 ? (
          <p className="no-contacts">No tienes contactos</p>
        ) : (
          <div className="table-wrapper">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Estado</th>
                  <th>Canal preferido</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.status}</td>
                    <td>{contact.preferredChannel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacts;
