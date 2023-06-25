import {Request, Response} from 'express'

export async function newHistory(req: Request, res: Response){
    try {
        console.log(req.body)
        
    } catch (error) {
        console.log('=====> ', error)
    }
}