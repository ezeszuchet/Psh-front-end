import React from 'react';
import Moment from 'react-moment';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Score</th>
                <th>Last stat created</th>
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
                <td>{row.score}</td>
                <td><Moment>{row.creation}</Moment></td>
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