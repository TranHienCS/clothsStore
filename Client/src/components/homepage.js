import React, { Component } from 'react';
import SearchBar from './Searchbar/searchbar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class homepage extends Component {
    render() {
        return (
            <div>
                <SearchBar></SearchBar>
                <FontAwesomeIcon icon={faCoffee} />
            </div>
        );
    }
}

export default homepage;