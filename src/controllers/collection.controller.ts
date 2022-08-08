import { Request, Response } from "express";
import collectionModel from '../models/collection';

class CollectionController {

    async createCollection(req: Request, res: Response) {
        // get the user authenticated
        const collectionDb = new collectionModel(req.body);
        try {
            await collectionDb.save();
            return res.status(200).json({
                ok: true,
                msg: 'Se ha creado una collection de manera exitosa'
            });
        } catch(err) {
            return res.status(400).json({
                ok: false,
                msg: `Ha ocurrido un error al intentar crear una collection ${err}`
            });
        }
    }

    async findCollections(req: Request, res: Response) {
        try {
            const users = await collectionModel.find();
            if(!users || users.length == 0) {
                return res.status(200).json({
                    ok: false,
                    msg: 'no se han encontrado usuarios en el sistema'
                });
            }
            return res.status(200).json({
                ok: true,
                data: users,
                msg: 'Se han encontrado registros en el sistema'
            });

        } catch(err) {
            return res.status(400).json({
                ok: false,
                msg: `Ha ocurrido un error en el servidor, error: ${err}`
            });
        }
            }

    async findCollectionsWithRequests(req: Request, res: Response) {
        try {
            const collectionQuery = collectionModel.find().populate('requests');
            //collectionQuery.populate('requests').exec();
            const collections = await collectionQuery;
            return res.status(200).json({
                ok: true,
                data: collections,
                msg: 'Se han encontrado registros de collections'
            });
        } catch(err) {
            res.status(400).json({
                ok: false,
                msg: `Ha ocurrido un error al intentar obtener los request de las collections, error: ${err} `
            });
        }
    }        

    async deleteCollection(req: Request, res: Response) {
        // delete ref requests
    }
}

export default new CollectionController();