import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import { CSVLink, CSVDownload } from "react-csv";

class App extends Component {
    state = {
        players: [],
        interval: null
    };

    componentWillMount() {
        const url = "http://psh-node.herokuapp.com/players?top=10";
    
        fetch(url)
            .then(result => result.json())
            .then(result => { 
                console.log(result);
                this.setState({ players: result }) });
    }

    componentDidMount() {
        const fetchPlayers = () => {
            const url = "http://psh-node.herokuapp.com/players?top=10";
    
            fetch(url)
                .then(result => result.json())
                .then(result => { 
                    console.log(result);
                    this.setState({ players: result }) });
        }
        this.setState({ ...this.state, interval: setInterval(fetchPlayers, 10000) });
    }
    
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const { players } = this.state;
        
        return (
            <div className="container">
                <h1>Psh Exam</h1>
                <p>Top 10 players</p>
                <Table
                    players={players}
                />
                <div style={{ margin: "10px" }}>
                    <CSVLink data={players}>Export report to csv</CSVLink>
                </div>
            </div>
        );
    }

}

export default App;