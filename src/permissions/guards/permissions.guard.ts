import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { RolePermissions } from '../permissions-map';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly permission: string) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.role) {
      throw new ForbiddenException('Usuario no autenticado.');
    }

    const userPermissions = RolePermissions[user.role];
    if (!userPermissions || !userPermissions[this.permission]) {
      throw new ForbiddenException('No tienes permisos para realizar esta acción.');
    }

    return true;
  }
}
