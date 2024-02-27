import { Router, Request, Response } from 'express';
import { findById, newPurchase } from "../controllers/purchases.js";
import authMiddleware from './middleware.js';

const purchaseRouter = Router();

purchaseRouter.use(authMiddleware);

purchaseRouter.get('/', async (req: Request, res: Response) => {
  const purchase = await findById(req.headers.currentuser?.toString());
  res.send(JSON.stringify(purchase));
});

purchaseRouter.put('/:id', () => {
  // update ingredient
});

purchaseRouter.post('/', async (req: Request, res: Response) => {
  const purchase = await newPurchase(req.body.planId, req.headers.currentuser?.toString());
  res.send(JSON.stringify(purchase));
});

export default purchaseRouter;
