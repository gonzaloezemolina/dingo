import { Router } from "express";
import pipelineController from "../controllers/pipeline.controller.js";

const pipelineRouter = Router();

pipelineRouter.get("/", pipelineController.getStages);
pipelineRouter.post("/", pipelineController.createStage);

export default pipelineRouter;
