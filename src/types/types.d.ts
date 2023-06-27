export type IVet = {
  email: strign
  password: string
  encriptado(password: string): Promise<string>;
  validacionEncriptado(password: string): Promise<boolean>;
  vet: {
    address: string,
    departament: string,
    nameLocal: String,
    image: String,
    facebook: string,
    instagram: string,
    numMatricula: number,
    propietario: string,
    province: string,
    services: [],
    tel: number,
    telWp: number,
    tiktok: string,
    web: string
  }
};

export type History = {
  Vacunas: [{
    Certification: number,
    DataVacuna: string,
    Vacuna: string,
    fecha: string,
    nameAndMatricule: string
  }],
  Registros: [{
    Info: string,
    Registro: string,
    fecha: string
  }],
  DataPet: {
      image: string,
      NombreMascota: string,
      Especie: string,
      Sexo: string,
      Nchip: number,
      Pedigree: number,
      Date: string,
      detalles: string
  },
  ownerPet: {
      NombreDueño: string,
      DNI: number,
      Telefono: number,
      Direccion: string,
      province: string,
      departament: string
  },
  id: number
}

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    export interface Request {
      userId: string;
    }
  }
}



// export {};
