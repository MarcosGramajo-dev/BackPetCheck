import { Router } from 'express';
import { profile, signIn, signUp } from '../controllers/authController';
import { verificacion } from '../middlewares/tokenVerification';

const router = Router();

router.post('/signUp', signUp);

router.post('/login', signIn);

router.get('/perfil', verificacion, profile);



export default router;
