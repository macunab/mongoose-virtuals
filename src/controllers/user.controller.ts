import { Request, Response } from "express";
import userModel from "../models/user";


class UserController {

    async createUser(req: Request, res: Response) {
        const userDb = new userModel(req.body);
        try {
            await userDb.save();
            return res.status(200).json({
                ok: true,
                msg: 'Usuario creado con exito'
            });
        } catch(err) {
            return res.status(400).json({
                ok: false,
                msg: `Ha ocurrido un error al intentar crear un usuario, error: ${err}` 
            });
        }
    }

    async findUsers(req: Request, res: Response) {
        try{
            const users = await userModel.find();
            return res.status(200).json({
                ok: true,
                data: users,
                msg: 'Se han obtenido los registros exitosamente'
            });
        } catch(err) {
            return res.status(400).json({
                ok: false,
                msg: `Ha ocurrido un error al intentar obtener los datos de usuarios, error: ${err}`
            });
        }
    }
}

export default new UserController();