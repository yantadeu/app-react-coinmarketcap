// @flow

// #region imports
import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, PageNotFound, Ticker} from './routes';
// #endregion

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tickers" component={Ticker} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
