import React, { Component } from 'react';

class SearchBar extends Component {

    state = { term: 'Love' };

    onChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // TODO: make sure we call calback from parent
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" name="search" value={ this.state.term } onChange={this.onChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
