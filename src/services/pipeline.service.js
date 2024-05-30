export default class pipelineService {
    constructor(dao) {
        this.dao = dao;
    }

    getStagesWithBusinesses = () => {
        return this.dao.getStages();
    }

    createStage = (stage) => {
        return this.dao.createStage(stage);
    }

    addBusinessToStage = (stageId, business) => {
        return this.dao.addBusinessToStage(stageId, business);
    }
}
