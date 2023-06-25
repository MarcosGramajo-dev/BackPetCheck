import { Router } from 'express';
import { profile, signIn, signUp } from '../controllers/authController';
import { newHistory } from '../controllers/historyControllers';
import { verificacion } from '../middlewares/tokenVerification';

const router = Router();

router.post('/signUp', signUp);

router.post('/login', signIn);

router.get('/perfil', verificacion, profile);

router.post('/auth/newHistory', newHistory );


export default router;
