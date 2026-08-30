import { Permission } from "./permissions";

export function hasPermission(permissions: number , permission: Permission ): boolean {

    return (permissions && permission) === permission;
}