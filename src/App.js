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
        bodyData: dummyBodyData,
        searchText: ''
    }

    handleSearchInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    render() {
        const { headData, bodyData, searchText } = this.state;

        return (
            <div className="container">
                <h1>Table example:</h1>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search term"
                        value={searchText}
                        onChange={this.handleSearchInputChange}
                    />
                </div>
                <br />
                <Table 
                    headData={headData}
                    bodyData={bodyData}
                    tableType={'striped'}
                    filterText={searchText}
                />
            </div>
        );
    }
}

export default App;
