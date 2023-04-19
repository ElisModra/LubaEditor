import { isNullOrWhitespace } from "./utils";
import { Role } from "./_enums";
import { localHostAuthUser } from "./_variables";

export function hasCurrentUserRoles(roles: Role[], op: 'AND' | 'OR' = 'AND'): boolean {
  const token = getAccessToken();
  let userRoles: Role[] | null = null;
  try {
    userRoles = JSON.parse(atob(token?.split('.')[1] as string))?.authorities as Role[];
  } catch (e: unknown) {
    console.error(e);
  }
  return checkRole(userRoles, roles, op);
}

export function isTokenValid(): boolean {
  const token = getAccessToken();
  if (!token) {
    return false;
  }

  return !hasTokenExpired(token);
}

export function hasTokenExpired(token: string): boolean {
  if (!isNullOrWhitespace(token)) {
    try {
      const jwtToken = JSON.parse(atob(token.split('.')[1]));
      return Date.now() / 1000 >= jwtToken.exp;
    } catch (e: unknown) {
      console.error(e);
      return true;
    }
  }

  return true;
}

export function getAccessToken(): string | null {
  return localStorage.getItem(localHostAuthUser);
}

export function checkRole(
  currentUserRoles: Role[] | null | undefined,
  roles: Role[],
  logicalOp: 'AND' | 'OR' = 'AND',
) {
  let hasRole = false;

  if (currentUserRoles?.length) {
    for (const checkRole of roles) {
      const roleFound = currentUserRoles.find((x) => x === checkRole);

      if (roleFound) {
        hasRole = true;

        if (logicalOp === 'OR') {
          break;
        }
      } else {
        hasRole = false;
        if (logicalOp === 'AND') {
          break;
        }
      }
    }
  }else{
    //TODO: roles are not implemented for now
    return true;
  }

  return hasRole;
}
