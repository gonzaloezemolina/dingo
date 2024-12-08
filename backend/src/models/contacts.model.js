import mongoose from 'mongoose'

const collection = 'contacts';

const schema = new mongoose.Schema({
    name:String,
    email:String,
    status:String,
    preferredChannel: String,
    preferredHour:String,
    source: String,
    lastTouch: Date,
    phone:String,
    company:String,
    position:String,
    link:String,
    project:String,
    brand:String,
    paymentMethod:String,
    country:String,
    address:String,
    industry:String,
    website:String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    customFields: {
        type: Map,
        of: String,
        default: {}
      },
})

const contactsModel = mongoose.model(collection,schema);

export default contactsModel;