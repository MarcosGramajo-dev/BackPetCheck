import { Request, Response } from 'express';
import Usuario from '../models/usuarios';

export async function GetAll(req: Request, res: Response){
    try{
        console.log(req)
        const doc = await Usuario.find({}).exec()
        res.json(doc).status(200).send('Se mando todo')
    }
    catch (error) {
        console.log(error);
        res.send({ error: 'No se pudo obtener datos' });
    }
}