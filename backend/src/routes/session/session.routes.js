import { Router } from "express";
import isAuth from "../../middlewares/auth.js";
import userController from "../../controllers/user.controller.js";

const router = Router();
const userService = new userController();

router.post('/registro', async (req,res) => {
    const {
        userName,
        email,
        password,
        role
    } = req.body;
    const newUser =  {
        userName,
        email,
        password,
        role
    } 
    const result = await userService.create(newUser);
    res.status(200).json({payload:result._id ,user: {userName,email,role}});
})

router.post('/login', async (req,res) => {
    const {email, password} = req.body;
    if (! email || ! password) {
        return res.status(400).json({message:'Usuario no encontrado'});
    }
    const result = await userService.getByParams({email,password});
    if (!result) {
        return res.status(400).send({message:'Credenciales incorrectas'})
    }
    req.session.user = result;
    res.status(200).json({message:"Logueado correctamente"});
    console.log(req.session);
});

router.delete('/logout', async (req,res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error al cerrar sesión');
        }
        else{
            return res.status(200).json({ message: 'Sesión cerrada correctamente' });
        };
    });
});

router.get('/dashboard', isAuth, (req, res) => {
    res.json({ message: 'Accediste a una ruta protegida' });
});
// este endpoint no esta funcionando

export default router;