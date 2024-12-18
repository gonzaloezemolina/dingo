import mongoose from "mongoose";

const collection = 'users';

const schema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    role:{
        type:String,
        enum: ["Edición", "Diseño", "Desarrollo web", "Fotografía", "Ilustración", "Copywriting", "Marketing", "Agencia", "Otro" ],
        default: "Freemium",
    },
    contacts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'contacts',  // referencia al modelo 'contacts'
        },
      ],
    tasks: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'tasks',  // referencia al modelo 'tasks'
        },
      ],
    expenses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expenses',
      }
    ],
    budgets:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'budgets'
      }
    ]
});

const userModel = mongoose.model(collection,schema);
export default userModel;