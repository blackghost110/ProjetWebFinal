import { ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common';
import { Response } from 'express';
@Catch(HttpException) //permet de recuperer les erreurs de type HtppException et on le modifie pour correspondre a notre type de retour souhaité
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response
        .status(exception.getStatus())
        .json(exception.getResponse());
  }
}
// PIPELINE EXAM question sur la gestion des exception en oral