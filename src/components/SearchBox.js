import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 ba b--green bg-lighest-blue'
            type='search'
            placeholder='Seach Robots'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox