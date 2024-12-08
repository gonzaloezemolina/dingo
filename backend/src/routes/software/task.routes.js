import Router from 'express'
import taskController from '../../controllers/task.controller.js'
import userController from '../../controllers/user.controller.js';

const router = Router();

const taskService = new taskController();
const userServ = new userController();

router.get('/', async (req,res) => {
    try {
        const getTasks = await taskService.getTasks();
        res.status(200).json({message:'Endpoint ejecutado correctamente'});
    } catch (error) {
        console.log(error);
        res.send('Error en endpoint:', error)
    }
})

router.post('/newTask/:tid', async (req,res) => {
    const {tid} = req.params
    const {title,description,status,dueDate,priority} = req.body;
    const newTask = {title,description,status,dueDate,priority};
    const createTask = await taskService.createTask(newTask);
    if (!createTask) {
        return res.status(400).json({message:"Error creando tarea"});
    }
    const findId = await userServ.getById(tid);
    if (!findId) {
        return res.status(404).json({message:"No se encontro el usuario"});
    }
    findId.tasks.push(createTask._id);
    await findId.save();

    return res.status(200).json({message: "Contacto creado y asociado al usuario correctamente", contactId: result._id,contact: { name, email, project, preferredChannel, status }});
});

export default router;