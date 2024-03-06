export interface IRoute {
  path: string;
  fullPath: string;
}

export interface IParamRoute {
  path: string;
  fullPath: (...parameters: any) => string;
}
