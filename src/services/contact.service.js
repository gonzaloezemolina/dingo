
export default class contactService{
    constructor (dao) {
        this.dao = dao;
    }

    getContacts = (contact) =>{
        return this.dao.getContacts(contact);
    }

    getContactById = (params) => {
        return this.dao.getContactById(params, { populate: true });
    }

    createContact = (contact) => {
        return this.dao.createContact(contact)
    }

    updateContact = (contact,id) => {
        return this.dao.updateContact(id,contact);
    }

    deleteContact = (id) => {
        return this.dao.deleteContact(id);
    }
}