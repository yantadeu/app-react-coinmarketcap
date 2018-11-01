// @flow

// #flow types
export type Link = {
  label: string,
  link: string,
  view?: string,
  isRouteBtn?: boolean,
};

export type Navigation = {
  brand: string,
  leftLinks: Array<Link>,
  rightLinks: Array<Link>,
};
// #endregion

const navigation = {
  brand: 'App React CoinMarketCap',
  leftLinks: [],
  rightLinks: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Cotações',
      link: '/tickers',
      view: 'tickers',
      isRouteBtn: true,
    },
  ],
};

export default navigation;
