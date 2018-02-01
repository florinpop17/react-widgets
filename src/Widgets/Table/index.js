import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component{
    constructor(props) {
        super(props);
        const { headData, bodyData } = this.props;

        this.state = {
            activeColumn: undefined,
            bodyData,
            headData
        }
    }

    sortTable = (columnIndex) => {
        const { activeColumn, bodyData } = this.state;

        if(activeColumn === columnIndex) {
            bodyData.sort(this.sortMatrix(columnIndex)).reverse();
            this.setState({
                activeColumn: undefined
            })
        } else {
            bodyData.sort(this.sortMatrix(columnIndex));
            this.setState({
                activeColumn: columnIndex
            })
        }

        this.setState({ bodyData });
    }

    sortMatrix = (columnIndex) => {
        return (a, b) => {
            if (a[columnIndex] === b[columnIndex]) {
                return 0;
            }

            return (a[columnIndex] < b[columnIndex]) ? -1 : 1;
        }
    }

    render() {
        const { filterText, tableType } = this.props;
        const { headData, bodyData } = this.state;

        const filteredBodyData = bodyData.filter(row => row.find(data => data.toLowerCase().includes(filterText.toLowerCase())));

        return (
            <table className={`table table-${tableType}`}>
                <thead>
                    <tr>
                        { headData && headData.map((data, idx) => (
                            <th key={idx} onClick={(e) => this.sortTable(idx)} >{ data }</th>
                        )) }
                    </tr>
                </thead>
                <tbody>
                    { filteredBodyData && filteredBodyData.map((rowData, idx) => (
                        <tr key={idx}>
                            { rowData && rowData.map((data, idx) => (
                                <td key={idx}>{ data }</td>
                            )) }
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
};

Table.defaultProps = {
    headData: [],
    bodyData: [[]],
    filterText: ''
};

Table.propTypes = {
    headData: PropTypes.arrayOf(PropTypes.string).isRequired,
    bodyData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    tableType: PropTypes.string,
    filterText: PropTypes.string
};

export default Table;