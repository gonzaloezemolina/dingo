import { Router } from "express";

const viewRouter = Router();

viewRouter.get("/", (req,res) => {
    res.render('home');
})

viewRouter.get("/tools", (req,res) =>{
    res.render("tools");
})

viewRouter.get('/crm',(req,res) => {
    res.render("crm", {tools:true});
})



export default viewRouter