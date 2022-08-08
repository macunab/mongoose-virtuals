import { Request, Response } from "express";
import requestModel from "../models/request";


class RequestController {

    async createRequest(req: Request, res: Response) {
        // todo
        console.log('ENTRO INIT')
        const requestDb = new requestModel(req.body);
        try {
            console.log('ENTRO TRY')
            await requestDb.save();
            return res.status(200).json({
                ok: true,
                msg: 'Se ha creado un request de manera exitosa'
            });
        } catch(err) {
            return res.status(400).json({
                ok: false,
                msg: `Ha ocurrido un error al intentar crear un request, error: ${err}`
            });
        }
    }

    async findRequests(req: Request, res: Response) {
        try {
            const requests = await requestModel.find();
            if(!requests || requests.length == 0) {
                res.status(200).json({
                    ok: true,
                    msg: 'No se han encontrado requests en el sistema'
                });
            }
            return res.status(200).json({
                ok: true,
                data: requests,
                msg: 'Se han encontrado los registros exitosamente'
            });
        } catch(err) {
            return res.status(400).json({
                ok: false,
                msg: `Ha ocurrido un error al intentar consultar los registros, error: ${err}`
            });
        }
    }
}

export default new RequestController();