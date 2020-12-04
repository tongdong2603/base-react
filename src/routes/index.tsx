/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes, { IListRoute } from './router';

const Router: React.FunctionComponent = () => {
  function renderRouters(arr: IListRoute, prefix = '/') {
    let listRoutes: any[] = [];

    arr.map((route) => {
      const { path } = route;
      prefix = `${prefix}${path}`.replace(/^\/\//, '/');

      listRoutes.push(
        <Route
          key={prefix}
          path={prefix}
          exact={!route?.exact}
          component={React.lazy(() => import(`../pages/${route.component}`))}
        />,
      );
      // eslint-disable-next-line operator-linebreak
      route?.groups?.length &&
        (listRoutes = listRoutes.concat(renderRouters(route.groups, prefix)));
    });

    return listRoutes;
  }

  return (
    <React.Suspense fallback={<div>Loading....</div>}>
      <Switch>
        {renderRouters(routes)}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </React.Suspense>
  );
};

export default Router;
