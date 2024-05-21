import { Router } from "express";
import contactController from "../controllers/contact.controller.js"; 

const contactRouter = Router();

contactRouter.get('/', contactController.getContacts);
contactRouter.post('/', contactController.createContact);

export default contactRouter;
