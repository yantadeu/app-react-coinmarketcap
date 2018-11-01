// @flow

// #region imports
import React, {PureComponent} from 'react';

import {
    type Match,
    type Location,
    type RouterHistory,
} from 'react-router-dom';

import TickerList from '../../components/TickerList';
import Jumbotron from "reactstrap/lib/Jumbotron";

// #endregion

// #region flow types
type Props = {
    // react-router 4:
    match: Match,
    location: Location,
    history: RouterHistory,

    ...any,
};

type State = any;

// #endregion

class Ticker extends PureComponent<Props, State> {
    // #region lifecycle
    render() {
        return (
            <div>
                <Jumbotron>
                    <div align="center">
                        <h2>Cotações</h2>
                        <h5>CoinMarketCap</h5>
                    </div>
                </Jumbotron>
                <TickerList/>
            </div>
        );
    }

    // #endregion
}

export default Ticker;
