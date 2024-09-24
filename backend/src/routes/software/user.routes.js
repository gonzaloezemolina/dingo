import { Router } from "express";
import userController from "../../controllers/user.controller.js";

const userService = new userController();

const router = Router();

    router.get('/usuario', async (req,res) => {
        try {
            if (!req.session.user) {
                return res.status(401).json({message: 'No estás logueado'});
            }
    
            // Si el usuario está en la sesión, se devuelven sus datos
            return res.status(200).json(req.session.user);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    })

export default router;