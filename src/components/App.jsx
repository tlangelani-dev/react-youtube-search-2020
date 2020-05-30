import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {

    render() {
        return (
            <div className="app ui container">
                <SearchBar />
            </div>
        )
    }
}

export default App;
