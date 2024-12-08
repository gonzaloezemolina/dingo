import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Contacts.css';

const Contacts = () => {
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

  return (
    <div>
      <div className="contacts_tools">
        <input className='search' type="search" placeholder='Buscar' />
        <button className='contactBtn'>
          Añadir cliente</button>
        <button className='contactBtn'>Personalizar campos</button>
        <button className='contactBtn'>Importar CSV</button>
      </div>
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
          type="text"
          name="status"
          placeholder="Estado"
          value={contact.status}
          onChange={handleInputChange}
        />
        <button type="submit">Añadir cliente</button>
      </form>

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
      </ul>}
    </div>
  );
}

export default Contacts;
