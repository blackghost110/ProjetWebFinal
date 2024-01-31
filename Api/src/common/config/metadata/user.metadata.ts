import {createParamDecorator, ExecutionContext} from "@nestjs/common";

/*
    permet d'extraire l'objet user de la requete
    @User permettra d'acceder n'importe où grace a l'utilisateur identifié par son token
 */
export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    });