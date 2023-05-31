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

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    export interface Request {
      userId: string;
    }
  }
}

// export {};
