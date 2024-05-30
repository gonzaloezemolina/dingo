import pipelineManager from "../dao/mongo/managers/pipeline.manager.js";
import pipelineService from "../services/pipeline.service.js";

const instancePipeline = new pipelineService( new pipelineManager());


const getStages = async (req, res) => {
    try {
        const stages = await instancePipeline.getStagesWithBusinesses();
        // res.render('pipeline', { stages });
    } catch (error) {
        console.error("Error in getStages:", error);
        res.status(500).send('Internal Server Error');
    }
};

const createStage = async (req, res) => {
    try {
        const newStage = req.body;
        const createdStage = await instancePipeline.createStage(newStage);
        res.status(201).json(createdStage);
    } catch (error) {
        console.error("Error in createStage:", error);
        res.status(500).send('Internal Server Error');
    }
};

const addBusinessToStage = async (req, res) => {
    try {
        const { stageId, business } = req.body;
        const updatedStage = await instancePipeline.addBusinessToStage(stageId, business);
        res.status(200).json(updatedStage);
    } catch (error) {
        console.error("Error in addBusinessToStage:", error);
        res.status(500).send('Internal Server Error');
    }
};

export default { getStages, createStage, addBusinessToStage };