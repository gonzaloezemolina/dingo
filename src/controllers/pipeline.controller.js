import pipelineManager from "../dao/mongo/managers/pipeline.manager.js";
import pipelineService from "../services/pipeline.service.js";

const instancePipeline = new pipelineService( new pipelineManager());


const getStages = async (req, res) => {
    try {
        const stages = await instancePipeline.getStages();
        res.render('pipeline', { stages });
    } catch (error) {
        console.log("Error", error);
    }
};

const createStage = async (req, res) => {
    try {
        const newStage = req.body; // Assuming the request body contains the new stage data
        const createdStage = await instancePipeline.createStage(newStage);
        res.status(201).json(createdStage);
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};

export default { getStages, createStage };