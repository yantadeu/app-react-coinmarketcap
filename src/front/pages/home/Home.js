// @flow

// #region imports
import React, {PureComponent} from 'react';
import {
    type Match,
    type Location,
    type RouterHistory,
} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import HomeInfo from './styled/HomeInfo';
import MainTitle from './styled/MainTitle';
import FlatButton from 'material-ui/FlatButton';
// #endregion

// #region flow types
export type Props = {
    // react-router 4:
    match: Match,
    location: Location,
    history: RouterHistory,

    ...any,
};

export type State = any;

// #endregion

class Home extends PureComponent<Props, State> {
    // #region lifecycle
    render() {
        return (
            <div>
                <Jumbotron>
                    <HomeInfo>
                        <MainTitle>App React Redux Api-CoinMarketCap</MainTitle>
                        <Link to={`/tickers`}>
                            <FlatButton className="btn" label="Cotações"/>
                        </Link>
                    </HomeInfo>
                </Jumbotron>
            </div>
        );
    }

    // #endregion
}

export default Home;
