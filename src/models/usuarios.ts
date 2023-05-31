import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IVet } from '../types/types';

const schemaVeterinarias = new Schema({
  id: String,
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true
  },
  vet: {
    address: String,
    departament: String,
    nameLocal:String,
    facebook: String,
    ownerVet: String,
    image: String,
    instagram: String,
    numMatricula: Number,
    propietario: String,
    province: String,
    services: [{ type: Object}],
    tel: Number,
    telWp: Number,
    tiktok: String,
    web: String
  }
});

schemaVeterinarias.methods.encriptado = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
};

schemaVeterinarias.methods.validacionEncriptado = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IVet>('Veterinaria', schemaVeterinarias);
