import contactsModel from "../models/contacts.model.js";
import userModel from "../models/user.model.js";
import csvParser from 'csv-parser'
// import { io } from "../app.js";
import fs from 'fs'

export default class contactsController {
    createContact = (contact) => {
        return contactsModel.create(contact)
    };

    getContacts = (user) => {
        return contactsModel.find({ '_id': { $in: user.contacts } }).lean()
    };

    getContactById = (id) => {
        return contactsModel.findById({_id:id});
    }

    deleteContacts = (id) => {
        return contactsModel.deleteOne({_id:id})
    }

    importContacts = (filePath, userId) => {
        return new Promise((resolve, reject) => {
            const contacts = [];
            
            fs.createReadStream(filePath)
                .pipe(csvParser({ separator: ';' }))
                .on('data', (row) => {
                    contacts.push({ ...row, user: userId }); // Cada fila del CSV se almacena como objeto
                })
                .on('end', async () => {
                    try {
                        // Insertar contactos en MongoDB
                        const result = await contactsModel.insertMany(contacts);

                        await userModel.findByIdAndUpdate(userId, {
                            $push: { contacts: { $each: result.map(contact => contact._id) } }
                        });

                        // Obtener los contactos actualizados
                        const updatedContacts = await contactsModel.find({ user: userId }).lean();
                        resolve(updatedContacts); // Devuelve los contactos actualizados
                        // resolve(result); Si falla ahora, es porque falta esto:
                    } catch (error) {
                        reject(error);
                    }
                })
                .on('error', (error) => {
                    reject(error);
                });
        });
    };
}