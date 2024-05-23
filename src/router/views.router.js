import contactController from "../controllers/contact.controller.js";
import pipelineController from "../controllers/pipeline.controller.js";
import { Router } from "express";

const viewRouter = Router();

viewRouter.get("/", (req,res) => {
    res.render('home');
})


viewRouter.get('/crm', async (req, res) => {
    try {
        const contacts = await contactController.fetchContacts();
        res.render('crm', { contacts });
    } catch (error) {
        res.status(500).send('Error fetching contacts');
    }
});

viewRouter.get("/buyerpersona", (req,res) => {
    res.render("buyerpersona")
})

viewRouter.get("/pipeline", async (req,res) => {
    const stages = await pipelineController.getStages();
    res.render("pipeline", {stages})
})



export default viewRouter