import Router from 'express'
import contactsController from '../../controllers/contact.controller.js';
import userController from '../../controllers/user.controller.js';
import upload from '../../middlewares/upload.js';
// import { io } from '../../app.js';

const router = Router();

const contactsService = new contactsController();
const userServ = new userController();

router.get('/:cid', async (req,res) => {
    try {
        const {cid} = req.params;
        const getUser = await userServ.getById(cid);
        console.log("Usuario obtenido:", getUser);
        if (!getUser) {
        return res.status(404).json({ error: "Usuario no encontrado" });
        }
        const getContacts = await contactsService.getContacts(getUser);
        if (!getContacts) {
            return res.status(404).json({ error: "No se encontraron contactos." });
        }
        res.status(200).json(getContacts); // Aquí enviamos la lista de contactos como respuesta
    } catch (error) {
        console.log("Error obteniendo contactos", error);
        res.status(500).json({ error: "Error obteniendo contactos" });
    }
})

router.post('/newContact/:cid', async (req,res) => {
    try {
        const {cid} = req.params;
        const {name,email,project,preferredChannel,status} = req.body;
        const newContact = {name,email,project,preferredChannel,status};
        const result = await contactsService.createContact(newContact);
        if (!result) {
            return res.status(400).json({error:"Error creando contacto"})
        }
        // 2. Buscar al usuario por ID
    const getUser = await userServ.getById(cid);

    if (!getUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // 3. Añadir el contacto al usuario (agregar el ID del contacto)
    console.log("Contacts del usuario antes de añadir:", getUser.contacts);
    getUser.contacts.push(result._id);
    console.log("Usuario obtenido:", getUser); // Asumiendo que el usuario tiene un array `contacts`
    // 4. Guardar el usuario actualizado
    await getUser.save();

    // 5. Devolver respuesta exitosa
    return res.status(200).json({
      message: "Contacto creado y asociado al usuario correctamente",
      contactId: result._id,
      contact: { name, email, project, preferredChannel, status }
    });
    } catch (error) {
        console.log("Error en endpoint newContact,", error);
        res.status(500).send({message:"Error en endpoint newContact:", error})        
    }
});

router.post('/importCSV/:cid', upload.single('file'), async (req, res) => {
    try {
        console.log(req.file); 
        const {cid} = req.params;
        const filePath = req.file.path; // Ruta del archivo subido
        // const userId = req.user._id;
        const getUser = await userServ.getById(cid);
        if (!getUser) {
          return res.status(404).json({ error: "Usuario no encontrado" });
        }
        const result = await contactsService.importContacts(filePath, getUser);
        await getUser.save();
        res.status(200).json({ message: "Contactos importados correctamente", count: result.length, contacts: result });
    } catch (error) {
        console.error("Error importando contactos:", error);
        res.status(500).json({ message: "Error importando contactos", error });
    }
});

export default router;