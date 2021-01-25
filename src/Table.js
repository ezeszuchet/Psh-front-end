import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.players.map((row, index) => {
        return (
            <tr key={index}>
                <td><img src={row.profileImage} alt=""/></td>
                <td>{row.username}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { players } = props;
    return (
        <table>
            <TableHeader />
            <TableBody players={players} />
        </table>
    );
}

export default Table;