import { Router } from "express";

const viewRouter = Router();

viewRouter.get("/", (req,res) => {
    res.render('home');
})


viewRouter.get('/crm',(req,res) => {
    res.render("crm");
})

viewRouter.get("/buyerpersona", (req,res) => {
    res.render("buyerpersona")
})



export default viewRouter