import React, { Component } from 'react';
import { Table } from './Widgets';

const dummyHeadData = ['#', 'Name', 'Age'];
const dummyBodyData = [
    ['1', 'Alex', '23'],
    ['2', 'Jenny', '33'],
    ['3', 'Bill', '18']
]

class App extends Component {
    state = {
        headData: dummyHeadData,
        bodyData: dummyBodyData
    }

    render() {
        const { headData, bodyData } = this.state;

        return (
            <div>
                <h1>Table example:</h1>
                <Table headData={headData} bodyData={bodyData} />
            </div>
        );
    }
}

export default App;
