import contactManager from "../dao/mongo/managers/contact.manager.js";
import contactService from "./contact.service.js";

export const ContactService = new contactService(contactManager());