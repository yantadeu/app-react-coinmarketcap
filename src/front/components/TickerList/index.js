import React, {Component} from 'react';
import './style.css';
import TickerListItem from '../TickerListItem';
import axios from 'axios';
import Jumbotron from "reactstrap/lib/Jumbotron";

class TickerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tickers: [],
        };
    }

    componentDidMount() {
        axios.get(`https://indexurl.herokuapp.com/api/v1/tickers`)
            .then(res => {
                const tickers = [];
                Object.keys(res.data).map(el => {
                        tickers.push(res.data[el])
                    }
                );
                this.setState({tickers});
            });
    }

    render() {
        return (

            <ul id="ticker-list">
                {
                    this.state.tickers.map(ticker =>
                        <li key={ticker.id} className="ticker-list-item">
                            <TickerListItem {...ticker} />
                        </li>)
                }
            </ul>

        );
    }
}

export default TickerList;
