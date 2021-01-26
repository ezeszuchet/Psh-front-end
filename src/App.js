import React, { Component } from 'react';
import Moment from 'react-moment';
import Table from './Table';
import { CSVLink } from "react-csv";

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
                <h1>Psh Exam, Updated at: <Moment>{Date.now()}</Moment> </h1>
                <p>Top 10 players</p>
                <Table
                    players={players}
                />
                <div className="csv">
                    <CSVLink data={players}>Export report to csv</CSVLink>
                </div>
            </div>
        );
    }

}

export default App;