import React from 'react';

const Table = ({ headData, bodyData, tableType }) => (
    <table className={`table table-${tableType}`}>
        <thead>
            <tr>
                { headData.map(data => (
                    <th key={data}>{ data }</th>
                )) }
            </tr>
        </thead>
        <tbody>
            { bodyData.map(rowData => (
                <tr key={rowData}>
                    { rowData.map(data => (
                        <td key={data}>{ data }</td>
                    )) }
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;