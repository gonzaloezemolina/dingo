export default class pipelineService {
    constructor (dao) {
        this.dao = dao;
    }

    getStages = (stages) => {
        return this.dao.getStages(stages);
    }

    createStage = (stage) => {
        return this.dao.createStage(stage);
    }
}