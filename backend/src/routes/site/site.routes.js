import { Router } from "express";
import __dirname from "../../utils.js";


const router = Router();

router.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

router.get('/precios', (req,res) => {
    res.sendFile(__dirname + '/views/prices.html');
});

router.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html');
});

router.get('/registro', (req,res) => {
    res.sendFile(__dirname + '/views/register.html');
});

router.get('/3d', (req,res) => {
    res.sendFile(__dirname + '/views/3d.html')
})

export default router