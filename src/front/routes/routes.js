// @flow

// #region imports
import loadable from 'loadable-components';
// #endregion

export const Home = loadable(() => import('../pages/home'));
export const Ticker = loadable(() => import('../pages/tickers'));
