// @flow

// #region imports
import 'babel-polyfill';
import React from 'react';
import { hydrate, render } from 'react-dom';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { loadComponents, getState } from 'loadable-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import injectGlobalStyle from './style/injectGlobalStyles';
import Root from './Root';
// #endregion

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

// #region globals (styles, polyfill ...)
smoothScrollPolyfill.polyfill();
window.__forceSmoothScrollPolyfill__ = true;
window.snapSaveState = () => getState();

injectGlobalStyle();
// #endregion

// #region render (with hot reload if dev)
const renderApp = RootComponent => {
  const Application = () => (
    <MuiThemeProvider>
      <RootComponent />
    </MuiThemeProvider>
  );

  if (bootstrapedElement.hasChildNodes()) {
    loadComponents().then(() => {
      hydrate(<Application />, bootstrapedElement);
    });
  } else {
    render(<Application />, bootstrapedElement);
  }
};

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
// #endregion



