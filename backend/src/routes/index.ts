import { Router } from 'express';
import usersRouter from './users.js';
import plansRouter from './plans.js';
import purchaseRouter from './purchases.js';

const router = Router();

router.use('/users', usersRouter);
router.use('/plans', plansRouter);
router.use('/purchases', purchaseRouter);

export default router;
