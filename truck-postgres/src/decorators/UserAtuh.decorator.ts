import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

export const UserAuth = createParamDecorator(
  (filterData: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (request.token) {
      if (filterData) {
        return request.token[filterData];
      } else {
        return request.token;
      }
    } else {
      throw new ForbiddenException(
        'Usuário logado não encontrado no banco de dados, Use o AuthGuard para obter o usuário',
      );
    }
  },
);
