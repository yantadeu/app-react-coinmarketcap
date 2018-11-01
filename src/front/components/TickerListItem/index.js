import React from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import {Label} from "react-bootstrap";

const CardTicker = ({id, rank, website_slug, name, symbol, quotes}) => (

    <Card className="ticker-list-item">
        <CardMedia style={{
            width: '100%',
            height: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#eee',
        }}>
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`} alt={`${name} ${symbol}`}/>
        </CardMedia>
        <CardTitle
            title={`${name}`}
            style={{height: '100%', display: 'flex', alignItems: 'center'}}
        >
        </CardTitle>
        <span className="ticker-span">
            <Label className="ticker-label">Símbolo:</Label> {symbol}<br/>
        </span>
        <span className="ticker-span">
            <Label className="ticker-label">Rank:</Label> {rank}<br/>
        </span>
        <span className="ticker-span">
            <Label className="ticker-label">Slug:</Label> {website_slug}<br/>
        </span>
        <CardActions title="Quotes" style={{display: 'flex'}}>
            <hr/>
            <span className="ticker-span">
             <Label className="ticker-label">Price:</Label> {quotes["USD"]["price"]}<br/>
            </span>
            <span className="ticker-span">
             <Label className="ticker-label">Vol. 24h:</Label> {quotes["USD"]["volume_24h"]}<br/>
            </span>
        </CardActions>
    </Card>
);

export default CardTicker;
