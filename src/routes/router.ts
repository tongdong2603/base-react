/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouteProps } from 'react-router-dom';

export type IListRoute = IRoute[];

type IRoute = {
  path: string;
  exact?: boolean;
  groups?: IListRoute;
  component: string;
};

const routes: IListRoute = [
  {
    path: '/',
    groups: [
      {
        path: '/home',
        component: 'Home',
        groups: [
          {
            path: '/test',
            component: 'Home',
          },
        ],
      },
    ],
    component: 'Home',
  },
  {
    path: '/404',
    component: 'Error/NotFound',
  },
];

export default routes;
