import React, {Component} from 'react';
import GiveList from './GiveList';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency :
            [
                {
                    name: 'Perfect Money USD',
                    short: 'USD',
                    pair: 'PMUSD',
                },
                {
                    name: 'Perfect Money EUR',
                    short: 'EUR',
                    pair: 'BTC',
                },
                {
                    name: 'Bitcoin (BTC)',
                    short: 'BTC',
                    pair: 'BTC',
                },
            ]
        }
    }
    render() {
        return (
            <div className="content_left">
                <p><b>Выберите направление обмена</b></p>
                <div>
                    <GiveList currencyList = {this.state.currency} />
                </div>
            </div>
        )
    }
}

export default List;