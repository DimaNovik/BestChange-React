import React, {Component} from 'react';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valueFrom : '',
            valueTo : '',
            valueOut : [],
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            valueFrom : nextProps.showDataFrom,
            valueTo : nextProps.showDataTo,
        });
        fetch('http://localhost:3000/xml/rates.xml')
            .then(response => response.text())
            .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
            .then(data => {
                    let getData = [];

                    for(let i=0;i<data.getElementsByTagName("from").length;i++) {
                        for(let i=0;i<data.getElementsByTagName("to").length;i++) {
                            if(data.getElementsByTagName("from")[i].innerHTML === this.state.valueFrom &&
                                data.getElementsByTagName("to")[i].innerHTML === this.state.valueTo) {

                                getData.push(data.getElementsByTagName("out")[i].innerHTML);

                            }
                        }
                    }

                    this.setState({
                        valueOut : getData[0],
                    })
                }

            )

    }


    render() {
        return (
            <div className="content_right">
                <p><b>Мониторинг обменных пунктов</b></p>
                <p>Наш мониторинг обменников создан для тех, кто обменивает электронные деньги в Интернете, и для тех,
                    кому важно производить безопасные обмены с наименьшими комиссионными затратами.</p>
                <p><b>Наиболее выгодные курсы обмена</b></p>
                <p>В таблице ниже вы найдете информацию о самых лучших курсах обмена по двадцати популярным направлениям.</p>
                
            </div>
        )
    }
}

export default Content;