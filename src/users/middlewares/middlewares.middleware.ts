import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MiddlewaresMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { authorization } = req.headers;
    if(!authorization){
      throw new HttpException("No AUht token",HttpStatus.FORBIDDEN)
    }

    next();
  }
}
