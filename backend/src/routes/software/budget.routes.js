import Router from 'express';
import budgetController from '../../controllers/budgets.controller.js';
import userController from '../../controllers/user.controller.js';
import contactsController from '../../controllers/contact.controller.js';
import { createBudgetEmailTemplate } from '../../utils/template.js';
import { sendEmail } from '../../middlewares/mailer.js';
import dotenv from 'dotenv'
import config from '../../config/config.js';
dotenv.config();

const router = Router();
const budgetService = new budgetController();
const userService = new userController();
const contactService = new contactsController();

router.post('/budget/:cid', async (req,res) => {
    try {
        const {cid} = req.params;
        const {clientes,descripcion,monto,estado,fechaCreacion,plantilla,link} = req.body;
        const getUser = await userService.getById(cid);


        if (!getUser) {
          return res.status(404).json({ error: "Usuario no encontrado" });
        }

        if (!Array.isArray(clientes) || clientes.length === 0) {
            return res.status(400).json({ error: "Debes proporcionar al menos un cliente válido." });
        }

        
        const presupuestosCreados = [];

        for (const clienteId of clientes) {
            const cliente = await contactService.getContactById(clienteId);

            if (!cliente) {
                console.log(`Cliente con ID ${clienteId} no encontrado, ignorando...`);
                continue; // Ignorar clientes no válidos
            }

            const newBudget = {
                user: cid,
                cliente: cliente._id,
                descripcion,
                monto,
                plantilla,
            };
        
            // const newBudget = {clientes,descripcion,monto,estado,fechaCreacion,plantilla,link}
        const createBudget = await budgetService.createBudget(newBudget)
        if (createBudget) {
            createBudget.link = `${config.back.BACKEND}/api/budgets/budgets/${createBudget._id}/response`;
            await createBudget.save();
            getUser.budgets.push(createBudget._id); // Asociar presupuesto al usuario
            presupuestosCreados.push(createBudget);

            //Enviar email. Este ultimo cambio quizas rompe el endpoint
            if (cliente.email) {
                const emailTemplate = createBudgetEmailTemplate(getUser, cliente, createBudget);
                await sendEmail(
                    cliente.email,
                    `Nuevo Presupuesto de ${getUser.userName}`,
                    emailTemplate
                );
            } else {
                console.error(`No se encontró email para el cliente ${cliente._id}`);
            }
        } else {
            console.log("Error creando el presupuesto. Log en router.post");
        }
    }

        await getUser.save();

        if (presupuestosCreados.length === 0) {
            return res.status(400).json({
                error: "No se pudo crear ningún presupuesto. Revisa los IDs de los clientes.",
            });
        }
    
        res.status(201).json({
            message: "Presupuestos creados con éxito",
            presupuestos: presupuestosCreados,
        });

    } catch (error) {
        console.log("Error en endpoint newbudget:", error);
        res.status(500).send({message:"Error en endpoint newbudget", error})
    }
});


router.get('/budget/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const presupuesto = await budgetService.getBudgetById(id);

        if (!presupuesto) {
            return res.status(404).json({ error: "Presupuesto no encontrado" });
        }

        res.status(200).json(presupuesto);
    } catch (error) {
        console.error("Error al obtener el presupuesto:", error);
        res.status(500).send({ message: "Error al obtener el presupuesto", error });
    }
});


router.get('/budgets/:id/response', async (req, res) => {
    try {
        const { id } = req.params;
        const { action } = req.query; // `action` será "accept" o "reject"

        const budget = await budgetService.getBudgetById(req.params.id);

        if (!budget) {
            return res.status(404).json({ error: "Presupuesto no encontrado" });
        }

        if (action === 'accept') {
            budget.estado = 'aceptado';
        } else if (action === 'reject') {
            budget.estado = 'rechazado';
        } else {
            return res.status(400).json({ error: "Acción no válida" });
        }

        await budget.save();

        // Respuesta al cliente
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Presupuesto ${action === 'accept' ? 'Aceptado' : 'Rechazado'}</title>
            </head>
            <body>
                <h1>Presupuesto ${action === 'accept' ? 'Aceptado' : 'Rechazado'}</h1>
                <p>Gracias por tu respuesta. Nos pondremos en contacto contigo pronto.</p>
            </body>
            </html>
        `);
    } catch (error) {
        console.log("Error en respuesta de presupuesto:", error);
        res.status(500).send({ message: "Error procesando respuesta de presupuesto", error });
    }
});


export default router;