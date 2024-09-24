import { Router } from "express";
import userController from "../../controllers/user.controller.js";

const router = Router();
const userService = new userController();

// post de registro 
router.post('/registro', async (req,res) => {
    const {
        userName,
        email,
        password
    } = req.body;
    const newUser =  {
        userName,
        email,
        password
    } 
    const result = await userService.create(newUser);
    res.status(200).json({payload:result._id ,user: {userName,email}});
})

// post de login
router.post('/login', async (req,res) => {
    const {email, password} = req.body;
    if (! email || ! password) {
        return res.status(400).json({message:'Usuario no encontrado'});
    }
    const result = await userService.getById({email,password});
    if (!result) {
        return res.status(400).send({message:'Credenciales incorrectas'})
    }
    req.session.user = result;
    res.status(200).json({message:"Logueado correctamente"});
    console.log(req.session);
});

// post logout
router.post('/logout', async (req,res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error al cerrar sesión');
        }
        // Elimina la cookie de sesión en el cliente
        res.clearCookie('connect.sid');  // Nombre de la cookie de sesión
        return res.status(200).json({ message: 'Sesión cerrada correctamente' });
    });
});

export default router;