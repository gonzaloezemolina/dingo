import contactModel from "../models/contact.model.js";

export default class contactManager {
    getContacts = (params) => {
        return contactModel.find(params);
    }

    getContactById = (params) => {
        return contactModel.findById(params)
    }

    createContact = (contact) => {
        return contactModel.create(contact)
    }

    updateContact = (id,contact) => {
        return contactModel.updateOne({_id:id}, {$set:contact})
    }

    deleteContact = (id) => {
        return contactModel.deleteOne({_id:id})
    }
}