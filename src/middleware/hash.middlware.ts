import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class HashMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    req.body['password'] = await bcrypt.hash(req.body['password'], 8);
    next();
  }
}
