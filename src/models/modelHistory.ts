import { Schema, model } from 'mongoose';

const schemaVeterinarias = new Schema({
  Vacunas: [{
    Certification: Number,
    DataVacuna: String,
    Vacuna: String,
    fecha: String,
    nameAndMatricule: String
  }],
  Registros: [{
    Info: String,
    Registro: String,
    fecha: String
  }],
  DataPet: {
      image: String,
      NombreMascota: String,
      Especie: String,
      Sexo: String,
      Nchip: Number,
      Pedigree: Number,
      Date: String,
      detalles: String
  },
  ownerPet: {
      NombreDueño: String,
      DNI: Number,
      Telefono: Number,
      Direccion: String,
      province: String,
      departament: String
  },
  id: Number
});

export default model<History>('Veterinaria', schemaVeterinarias);