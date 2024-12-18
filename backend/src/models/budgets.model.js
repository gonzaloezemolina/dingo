import mongoose from 'mongoose'

const collection = ' budgets';

const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, // Asociado al usuario que crea el presupuesto
    clientes: { type: mongoose.Schema.Types.ObjectId, ref: 'contacts' }, // Asociado al contacto (cliente)
    descripcion: String,
    monto: Number,
    estado: { type: String, enum: ['pendiente', 'aceptado', 'rechazado'], default: 'pendiente' },
    fechaCreacion: { type: Date, default: Date.now },
    plantilla: String, // Referencia a la plantilla HTML utilizada
    link: String, // Link único para el presupuesto
})

const budgetModel = mongoose.model(collection,schema);

export default budgetModel;