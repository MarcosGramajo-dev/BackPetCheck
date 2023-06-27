import { Router } from 'express';
import { GetAll } from '../controllers/vetsControllers';
import { findHC } from '../controllers/historyControllers';
const router = Router();

router.get('/', GetAll);

router.get('/HistoryClinic/:id', findHC);

export default router;