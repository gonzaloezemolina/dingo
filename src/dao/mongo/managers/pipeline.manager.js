import pipelineModel from "../models/pipeline.model.js";

export default class pipelineManager {

    getStages = (stages) => {
        return pipelineModel.find(stages);
    }

    createStage = (stage) => {
        return pipelineModel.create(stage);
    }
}



