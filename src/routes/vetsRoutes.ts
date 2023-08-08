import { Router } from 'express';
import { GetAll } from '../controllers/vetsControllers';
import { findHC, findHCByDni, findHCByNchip } from '../controllers/historyControllers';
const router = Router();

router.get('/', GetAll);

router.get('/HistoryClinic/id/:id', findHC);
router.get('/HistoryClinic/dni/:id', findHCByDni);
router.get('/HistoryClinic/nchip/:id', findHCByNchip);

export default router;