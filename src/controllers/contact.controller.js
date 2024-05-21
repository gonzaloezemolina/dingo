import contactManager from "../dao/mongo/managers/contact.manager.js";
import contactService from '../services/contact.service.js';

// Crear una instancia de contactService con el DAO adecuado
const contactServiceInstance = new contactService(new contactManager());


const fetchContacts = async () => {
  try {
      const contacts = await contactServiceInstance.getContacts({});
      return contacts;
  } catch (error) {
      throw new Error('Error fetching contacts');
  }
};

const getContacts = async (req, res) => {
  try {
      const contacts = await fetchContacts();
      res.status(200).json(contacts);
  } catch (error) {
      res.status(500).send({ status: "Error", message: "Internal server Error" });
  }
};


// const getContacts = async (req,res) => {
//     try {
//         const contacts = await contactServiceInstance.getContacts({});
//         res.status(200).json(contacts);
//     } catch (error) {
//         res.status(500).send({status:"Error", message: "Internal server Error"});
//     }
// } 

const createContact = async (req, res, next) => {
    try {
      const { name, email, phone, status, channel, lastTouch } =
        req.body;
      if (!name || !email || !phone || !status || !channel ) {
        return res.status(400).json({ message: "Error! product not created" });
      }
  
      const newContact = {
        name,
        email,
        phone,
        status,
        channel,
        lastTouch,
      };
  
  
    //   if (lastTouch !== undefined) {
    //     newContact.lastTouch = lastTouch;
    //   }
  
  
      const contact = await contactServiceInstance.createContact(newContact);
  
      if (contact === "The insert code already exists") {
        return res.status(400).json({ message: "Error! contact not created" });
      } else if (contact === "Complete all fields") {
        return res.status(400).json({ message: "Error! contact not created" });
      } else {
        return res.status(201).json({ message: "contact created", contact });
      }
    } catch (error) {
      console.log("Otro error mas", error);
    }
  }


  export default {
    getContacts,
    createContact,
    fetchContacts
  }