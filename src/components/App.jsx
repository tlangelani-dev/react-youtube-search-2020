import React, { Component } from 'react';
import youtube from '../apis/youtube';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {

    state = { videos: [] };

    onTermSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log({res});
        this.setState({ videos: res.data.items });
    };

    render() {
        return (
            <div className="app ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <p>Total: {this.state.videos.length}</p>
            </div>
        )
    }
}

export default App;
