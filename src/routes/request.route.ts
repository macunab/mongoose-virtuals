import { Application } from "express";
import requestController from "../controllers/request.controller";
import { CommonRoutesConfig } from "../helpers/commonRoutesConfig";


export class RequestRoute extends CommonRoutesConfig {

    constructor(app: Application) {
        super(app, 'RequestRoute');
    }

    configureRoutes(): Application {

        this.app.route('/requests')
            .get(requestController.findRequests);

        this.app.route('/requests/create')
            .post(requestController.createRequest);            

        return this.app;
    }
}