import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI as string, {
    autoIndex: true,
    dbName: 'VeterinariasPetCheck'
  })
  .then(() => console.log('Conectado a la base de datos'))
  .catch((error) => console.log(error));
