import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';
import usuarios from '../models/usuarios';
import mongoose from 'mongoose';
dotenv.config();

export async function verificacion(req: Request, res: Response, next: NextFunction) {
  try {
    const { tokenLocal } = req.query;
    const token = tokenLocal?.toString(); // Convertir el token a una cadena

    if (token) {
      const doc = await usuarios.findOne({ password: token.slice(1, -1) }).exec();
      if (doc?.password) {
        return next();
      }
    }

    // Si no se cumple la verificación, puedes enviar una respuesta de error o redirigir a otra ruta
    res.status(401).json({ error: 'Acceso no autorizado' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
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