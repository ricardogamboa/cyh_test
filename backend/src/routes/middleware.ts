import { Router, Request, Response, NextFunction} from 'express';

export default function authMiddleware (req: Request, res: Response, next: NextFunction) {
  if(req.headers.currentuser !== undefined &&req.headers.currentuser !== 'undefined' ) {
    next();
  }
  else {
    res.sendStatus(403);
  }
}
