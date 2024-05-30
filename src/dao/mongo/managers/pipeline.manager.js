import stageModel from "../models/stage.model.js";
import businessModel from "../models/bussiness.model.js";

export default class pipelineManager {

    getStages = () => {
        return stageModel.find().populate('businesses');
    }

    createStage = (stage) => {
        return stageModel.create(stage);
    }

    addBusinessToStage = async (stageId, business) => {
        const newBusiness = await businessModel.create(business);
        const stage = await stageModel.findById(stageId);
        if (!stage) {
            throw new Error("Stage not found");
        }
        stage.businesses.push(newBusiness._id);
        return stage.save();
    }
}



