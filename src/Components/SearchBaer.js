import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term); 
    };

    const handleChange = (event) => {
        setTerm(event.target.value); 
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                {/* تأكيد البحث: {term} */}
                <input value={term} onChange={handleChange} />
                {/* {term.length < 3 && 'term must be longer'} */}
            </form>
            {/* <button className="" onClick={handleClick}>Click me</button> */}
        </div>
    );
}

export default SearchBar;
