import { Application } from "express";
import collectionController from "../controllers/collection.controller";
import { CommonRoutesConfig } from "../helpers/commonRoutesConfig";

export class CollectionRoute extends CommonRoutesConfig {

    constructor(app: Application) {
        super(app, 'CollectionRoute')
    }
    // here declare the routes for collections
    configureRoutes(): Application {

        this.app.route('/collections')
            .get(collectionController.findCollections);

            // bad, send a conditional ket in /collections
        this.app.route('/collections/requests')
            .get(collectionController.findCollectionsWithRequests);    

        this.app.route('/collections/create')
            .post(collectionController.createCollection);
            
        this.app.route('/collections/:id')
            .delete(collectionController.deleteCollection);            

        return this.app;
    }
}