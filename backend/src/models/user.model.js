import mongoose from "mongoose";

const collection = 'users';

const schema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    role:{
        type:String,
        enum: ["Freelancer", "Emprendedor"],
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
    ]
});

const userModel = mongoose.model(collection,schema);
export default userModel;