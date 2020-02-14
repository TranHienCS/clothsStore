import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';

import './searchbar.css';
class searchbar extends Component {
    render() {
        return (
            <div className="row">
                <input type="text" className="search-input" placeholder="Search"></input>
                <button className="search-button"><FiSearch/></button>
            </div>

        );
    }
}

export default searchbar;