import express from 'express';
import login from './routes/authRoutes';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import './DB';
import dotenv from 'dotenv';
import Vets from './routes/vetsRoutes'
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'https://petcheck.com.ar',
};

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions)); //configurar bien esto
app.options('*', cors());
app.use(helmet()); //revisar parametros para agregar

//Routes

app.post('/regTest', (req, res) => {
  console.log(req.body);
  res.status(201).send('Llegaron los datos');
});

app.use('/', Vets);
app.use('/auth', login);

//Config
app.listen(PORT, () => {
  console.log(`Servidor inicializado en http://localhost:${PORT}`);
});
