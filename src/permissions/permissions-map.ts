import { UserRole } from "./enums/role.enum";

export const RolePermissions = {
  [UserRole.SUPER_ADMIN]: {
    canManageUsers: true,
    canEditWorkspaces: true,
    canViewAnalytics: true,
    canCreateProjects: true,
    canDeleteProjects: true,
  },
  [UserRole.ADMIN]: {
    canManageUsers: true,
    canEditWorkspaces: true,
    canViewAnalytics: true,
    canCreateProjects: true,
    canDeleteProjects: false,
  },
  [UserRole.MANAGER]: {
    canManageUsers: false,
    canEditWorkspaces: true,
    canViewAnalytics: true,
    canCreateProjects: true,
    canDeleteProjects: false,
  },
  [UserRole.USER]: {
    canManageUsers: false,
    canEditWorkspaces: false,
    canViewAnalytics: false,
    canCreateProjects: true,
    canDeleteProjects: false,
  },
  [UserRole.GUEST]: {
    canManageUsers: false,
    canEditWorkspaces: false,
    canViewAnalytics: false,
    canCreateProjects: false,
    canDeleteProjects: false,
  },
};
