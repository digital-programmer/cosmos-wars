import { IRoute } from '../utils/types/common-types';

export const HOME_ROUTE: IRoute = {
  path: 'home',
  get fullPath(): string {
    return `/${HOME_ROUTE.path}`;
  },
};
