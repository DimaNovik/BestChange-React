import React, {Component} from 'react';
import Content from './Content';

class ParseData extends Component {
    constructor(props) {
        super(props);

        this.state =
             {
            valueFrom : null,
            valueTo : null,
        }

    }

    componentWillReceiveProps(nextProps) {

            this.setState({
                valueFrom : nextProps.giveCheck,
                valueTo : nextProps.getCheck,
            })


    }

    render() {
        return(
            <Content showDataFrom = {this.state.valueFrom} showDataTo = {this.state.valueTo} />
        )
    }
}

export default ParseData;