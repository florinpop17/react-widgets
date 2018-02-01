import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ headData, bodyData, tableType }) => (
    <table className={`table table-${tableType}`}>
        <thead>
            <tr>
                { headData && headData.map(data => (
                    <th key={data}>{ data }</th>
                )) }
            </tr>
        </thead>
        <tbody>
            { bodyData && bodyData.map(rowData => (
                <tr key={rowData}>
                    { rowData && rowData.map(data => (
                        <td key={data}>{ data }</td>
                    )) }
                </tr>
            ))}
        </tbody>
    </table>
);

Table.propTypes = {
    headData: PropTypes.arrayOf(PropTypes.string).isRequired,
    bodyData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    tableType: PropTypes.string
};

export default Table;