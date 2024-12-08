import mongoose from 'mongoose';

const collection = 'expenses';

const schema = new mongoose.Schema({
    amount: String,
    date: Date,
    description: String,
    category: String
});

// Configuracion basica. Lo ideal seria ver la forma cual podemos integrar los datos de inversion del proyecto real

const expensesModel = mongoose.model(collection,schema);

export default expensesModel;