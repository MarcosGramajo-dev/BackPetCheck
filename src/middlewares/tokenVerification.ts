import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';
import usuarios from '../models/usuarios';
import mongoose from 'mongoose';
dotenv.config();

export function verificacion(req: Request, res: Response, next: NextFunction) {
  
  let {tokenLocal} = req.query
    console.log(res)
    tokenLocal = tokenLocal?.toLocaleString()

  usuarios.findOne({password: tokenLocal?.slice(1,-1)}).then(doc => {
    if(doc?.password != null && doc.password != undefined){
      return next();
    } else {
    }
  })
  .catch(error => console.log(error))

}

// console.log(mongoose.Types.ObjectId.isValid(objectId))
// console.log(objectId)

// const authTokenRecibido = req.header('autorizationToken');

// if (!authTokenRecibido) {
//   return res.status(401).send('Acceso denegado');
// }

// const payload = jwt.verify(
//   authTokenRecibido,
//   process.env.TOKEN_SECRET as string
// ) as JwtPayload;

// req.userId = payload._id;

// console.log('esta bien el token');