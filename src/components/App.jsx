import React, { Component } from 'react';
import youtube from '../apis/youtube';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {

    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="app ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App;
