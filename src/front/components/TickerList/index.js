import React, {Component} from 'react';
import './style.css';
import TickerListItem from '../TickerListItem';
import axios from 'axios';

let start = 1;
const limit = 8;
const sort = 'rank';

class TickerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            tickers: [],
        };
        window.onscroll = () =>  {
            const {
                loadTickers,
                state: {
                    error,
                    isLoading,
                    hasMore,
                },
            } = this;
            if (error || isLoading || !hasMore) {
                console.log('error')
                return;
            }
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                loadTickers();
            }
        };
    }

    componentDidMount() {
        this.loadTickers();
    }

    loadTickers = () => {
        console.log('isLoading')
        this.setState({isLoading: true}, () => {
            axios
                .get('https://indexurl.herokuapp.com/api/v1/tickers?start=' + start + '&limit=' + limit + '&sort=' + sort)
                .then((results) => {

                    const nextTickers = [];
                    Object.keys(results.data).map(el => {
                            nextTickers.push(results.data[el])
                        }
                    );

                    this.setState({
                        hasMore: (this.state.tickers.length < 100),
                        isLoading: false,
                        tickers: [
                            ...this.state.tickers,
                            ...nextTickers,
                        ],
                    });

                    start = start + 9;

                })
                .catch((err) => {
                    this.setState({
                        error: err.message,
                        isLoading: false,
                    });
                })
        });
    }

    render() {
        const {
            error,
            hasMore,
            isLoading,
            tickers,
        } = this.state;
        console.log(this.state)
        return (
            <div>
                <ul id="ticker-list">
                    {
                        tickers.map(ticker =>
                            <li key={ticker.id} className="ticker-list-item">
                                <TickerListItem {...ticker} />
                            </li>)
                    }
                </ul>
                <hr/>
                {error &&
                <div style={{color: '#900'}}>
                    {error}
                </div>
                }
                {isLoading &&
                <div>Carregando...</div>
                }
                {!hasMore &&
                <div>Todos os items foram carregados</div>
                }
            </div>

        );
    }
}

export default TickerList;
