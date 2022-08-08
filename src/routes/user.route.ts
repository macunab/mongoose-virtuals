import { Application } from "express";
import userController from "../controllers/user.controller";
import { CommonRoutesConfig } from "../helpers/commonRoutesConfig";


export class UserRoute extends CommonRoutesConfig {

    constructor(app: Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes(): Application {

        this.app.route('/users/create')
            .post(userController.createUser);

        this.app.route('/users')
            .get(userController.findUsers);
        return this.app;
    }
}