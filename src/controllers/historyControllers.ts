import {Request, Response} from 'express'
import ModelHistory from '../models/modelHistory'

export async function newHistory(req: Request, res: Response){
    try {

        const hc = new ModelHistory({
            Vacunas: req.body.Vacunas,
            Registros: req.body.Registros,
            DataPet: req.body.DataPet,
            ownerPet: req.body.ownerPet,
            id: req.body.id
        })

        const validationID = await ModelHistory.findOne({id: hc.id}).then( doc => {
            if(doc){
                res.send("El ID de Libreta ya existe")
            }
            else{
                async function guardarInfo () {
                    const guardado = await hc.save()
                    guardado
                    res.send('Se registro con exito!');
                }
                guardarInfo();
            }
        })

        validationID
        console.log(req.body)
        
    } catch (error) {
        console.log('=====> ', error)
    }
}

export async function findHC (req: Request, res: Response){
    try {
        const HC = ModelHistory.findOne({id:req.params.id}).then( doc => {
            if(doc){
                console.log("====> HC", doc )
                res.send(doc)
            } else {
                res.send("No existe ese ID")
            }
        })
        console.log("=========> Esta en findHC", req.params.id)
    } catch (error) {
        console.log("=====> Error", error)
    }
}