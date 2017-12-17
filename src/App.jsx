import React, {Component} from 'react';
import List from './components/List';
import Content from './components/Content';



class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <h1>Best Change App</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="content_area">
                        <List />
                        <Content />
                    </div>
                </div>
            </div>
        )

    }
}

export default App;