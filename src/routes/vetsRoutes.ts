import { Router } from 'express';
import { GetAll } from '../controllers/vetsControllers';

const router = Router();

router.get('/', GetAll);



export default router;