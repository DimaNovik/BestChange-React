import React, {Component} from 'react';
import ParseData from './ParseData';

class GiveList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            givepair : '',
            getpair : '',
        }

        this.setCurrencyListFrom = this.setCurrencyListFrom.bind(this);
        this.setCurrencyListTo = this.setCurrencyListTo.bind(this);
    }

    setCurrencyListFrom(event) {
        event.preventDefault();
        let fromList = document.querySelectorAll('.content_list_item:nth-child(1) .currency-list li a');
        let listKey = Number(event.target.dataset['item']);
        for(let i=0; i<fromList.length;i++) {
            fromList[i].classList.remove('currency-active');
            if(i === listKey) {
                if(!fromList[i].classList.contains('currency-active')) {
                    fromList[i].classList.add('currency-active');
                }
                this.setState({
                    givepair : fromList[i].dataset['pair_from'],
                })

            }

        }

    }

    setCurrencyListTo(event) {
        event.preventDefault();

        let toList = document.querySelectorAll('.content_list_item:nth-child(2) .currency-list li a');
        let listKey = Number(event.target.dataset['item']);
        for(let i=0; i<toList.length;i++) {
            toList[i].classList.remove('currency-active');
            if(i === listKey) {
                if(!toList[i].classList.contains('currency-active')) {
                    toList[i].classList.add('currency-active');
                }
                this.setState({
                    getpair : toList[i].dataset['pair_to'],
                })

            }

        }
    }
    render() {
        return(
            <div className="content_list_area">
                <div className="content_list_item">
                    <ul className="currency-list">
                        {this.props.currencyList.map((item, index) =>
                            <li key={index}>
                                <a href=""
                                   onClick={this.setCurrencyListFrom}
                                   data-item={index}
                                   data-pair_from={item.pair}>{item.name}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="content_list_item">
                    <ul className="currency-list">
                        {this.props.currencyList.map((item, index) =>
                            <li key={index}>
                                <a href=""
                                   onClick={this.setCurrencyListTo}
                                   data-item={index}
                                   data-pair_to={item.pair}>{item.name}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="visually-hidden">
                    <ParseData giveCheck = {this.state.givepair} getCheck = {this.state.getpair} />
                </div>
            </div>
        )
    }
}

export default GiveList;