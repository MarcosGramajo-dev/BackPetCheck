import { Request, Response } from 'express';
import Usuario from '../models/usuarios';
import jwt from 'jsonwebtoken';
import { error } from 'console';
import { generateKey } from 'crypto';
import { verificacion } from '../middlewares/tokenVerification';

//-----------------------------------------------------registro-------------------------------------------------------------


export async function signUp(req: Request, res: Response) {
  // Guardado de usuario
  try {
    const veterinaria = new Usuario({
      // email: req.body.email,
      // password: req.body.password,
      email: req.body.user.email,
      password: req.body.user.password,
      vet:{
        image: req.body.vet.image,
        nameLocal: req.body.vet.nameLocal,
        ownerVet: req.body.vet.ownerVet,
        services: req.body.vet.service,
        numMatricula: req.body.vet.numMatricula,
        province: req.body.vet.province,
        departament: req.body.vet.departament,
        address: req.body.vet.address,
        tel: req.body.vet.tel,
        telWp: req.body.vet.telWp,
        web: req.body.vet.web,
        instagram: req.body.vet.instagram,
        tiktok: req.body.vet.tiktok,
        facebook: req.body.vet.facebook
      }
    });

    console.log(veterinaria)
    
    const verificacionEmail = await Usuario.findOne({email: veterinaria.email}).then(doc => {
      if(doc){
          res.send("El Email ya esta en uso!")
        }
        else{
          async function guardarInfo () {
            veterinaria.password = await veterinaria.encriptado(veterinaria.password);
            const guardado = await veterinaria.save()
            const token = jwt.sign({ _id: guardado._id }, process.env.TOKEN_SECRET as string);
            res.header('elToken', token).send('Se registro con exito!');
          }
          guardarInfo();
            
        }
    }).catch(error => console.log(error))

    verificacionEmail


  } catch (error) {
    console.error(error);
    res.status(500).send('algo salio mal');
  }
}

//--------------------------------------------------------login----------------------------------------------------------

export async function signIn(req: Request, res: Response) {
  console.log(req.body);

  //mejorar con TRY / CATCH

  try {
    const usuarioEncontrado = await Usuario.findOne({
      email: req.body.email
    });

    if (!usuarioEncontrado) {
      return res.status(400).json('Usuario no encontrado');
    }

    const contrasenaCorrecta = await usuarioEncontrado.validacionEncriptado(
      req.body.password
    );

    if (!contrasenaCorrecta) {
      return res.status(403).send('Contrasena invalida');
    }

    const elToken = jwt.sign(
      { _id: usuarioEncontrado._id },
      process.env.TOKEN_SECRET as string,
      {
        expiresIn: 60 * 30 //  =media hora // (segs, mins, horas)
      }
    );
    return res.header('authorizationToken', elToken).json(usuarioEncontrado);
  } catch (error) {
    console.error(error);
    return res.status(404).send('Usuario no registrado');
  }

  // res.send('logeado');
}
//---------------------------------------------------perfil---------------------------------------------------------------

export async function profile(_req: Request, res: Response) {
  // console.log(req.header('autorizationToken'));
  // console.log(req.userId);
  res.send('Success');
}