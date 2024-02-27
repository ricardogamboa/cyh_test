import { Router, Request, Response} from 'express';
import getAllPlans from "../controllers/plans.js";

const plansRouter = Router();

plansRouter.get('/', async (req: Request, res: Response) => {
  const plans = await getAllPlans();
  res.send(JSON.stringify(plans));
});

export default plansRouter;
