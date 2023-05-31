import { Request, Response } from 'express';
import Usuario from '../models/usuarios';

export async function GetAll(res: Response){
    try{
        const doc = Usuario.find({})
        .exec().then(doc =>{
            console.log(doc)
            res.json(doc)
        })
        //la promesa me queda pendiente, no se resuelve
    }
    catch(error){
        console.log(error)
        res.status(500).send({error: 'No se pudo obtener datos'})
    }
}