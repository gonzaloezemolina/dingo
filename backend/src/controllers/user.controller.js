import userModel from '../models/user.model.js';

export default class userController {

    getAll = () => {
        return userModel.find().lean();
    };

    getById = (id) => {
        return userModel.findOne({_id:id});
    };

    getByParams = (params) => {
        return userModel.findOne(params);
    };

    create = (user) => {
        return userModel.create(user);
    }
}