import React, {Component} from 'react';
import ParseData from './ParseData';


class GetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            getpair: ''
        };

        this.setCurrencyList = this.setCurrencyList.bind(this);

    }
    setCurrencyList(event) {
        event.preventDefault();
        let list = document.querySelectorAll('.content_list_item:nth-child(2) .currency-list li a');
        let listKey = Number(event.target.dataset['item']);
        for(let i=0; i<list.length;i++) {
            list[i].classList.remove('currency-active');
            if(i === listKey) {
                if(!list[i].classList.contains('currency-active')) {
                    list[i].classList.add('currency-active');

                }
                this.setState({
                    getpair : list[i].dataset['pair'],
                });

            }


        }
    }
    render() {
        return(
            <div>
            <ul className="currency-list">
                {this.props.currencyList.reverse().map((item, index) =>
                    <li key={index}>
                        <a href=""
                        onClick={this.setCurrencyList}
                        data-item={index}
                        data-pair={item.pair}>{item.name}</a>
                    </li>

                )}

            </ul>
                <div className="visually-hidden">
                    <ParseData getCheck = {this.state.getpair} />
                </div>
            </div>
        )
    }
}

export default GetList;