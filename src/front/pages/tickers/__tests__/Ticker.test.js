// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import Ticker from '../Ticker';
// #endregion

describe('Ticker page', () => {
  it('renders as expected', () => {
    const props = {
      actions: {},
    };
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <Ticker {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
