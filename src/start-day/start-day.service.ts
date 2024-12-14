import { Injectable } from '@nestjs/common';
import { WorkspaceService } from 'src/workspace/workspace.service';

@Injectable()
export class StartDayService {
  constructor(private readonly workspaceService: WorkspaceService) {}

  async getStartOptions(userId: string): Promise<any> {
    const workspaces = await this.workspaceService.findUserWorkspaces(userId);

    if (!workspaces || workspaces.length === 0) {
      return {
        message: 'No tienes workspaces activos. ¿Qué deseas hacer hoy?',
        options: ['Crear un nuevo workspace', 'Ver tutorial'],
      };
    }

    return {
        message: '¿En qué deseas enfocarte hoy?',
        options: workspaces.map((workspace) => ({
          id: workspace.id,
          name: workspace.name,
        })),
      };
  }
}
