import { Request, Response } from 'express';
import Usuario from '../models/usuarios';

export async function GetAll(req: Request, res: Response){
    try{
        console.log(req)
        const doc = await Usuario.find({}).exec()
        res.status(200).json(doc)
    }
    catch (error) {
        console.log(error);
        res.send({ error: 'No se pudo obtener datos' });
    }
}