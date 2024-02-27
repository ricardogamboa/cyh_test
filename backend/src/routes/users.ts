import { Router, Request, Response} from 'express';
import authenticate from "../controllers/users.js";

const usersRouter = Router();

//TODO: replace this for an authentication service like AWS Cognito or Auth0
usersRouter.post('/authenticate', async (req: Request, res: Response) => {
  const user = await authenticate(req.body.email, req.body.password);
  res.send(JSON.stringify(user));
});

export default usersRouter;
