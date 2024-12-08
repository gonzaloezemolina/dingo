import contactsModel from "../models/contacts.model.js";

export default class contactsController {
    createContact = (contact) => {
        return contactsModel.create(contact)
    };

    getContacts = () => {
        return contactsModel.find().lean()
    };

    getContactById = (id) => {
        return contactsModel.findById({_id:id});
    }

    deleteContacts = (id) => {
        return contactsModel.deleteOne({_id:id})
    }
}