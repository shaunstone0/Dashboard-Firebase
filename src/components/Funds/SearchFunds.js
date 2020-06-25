import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchFunds({ useFilters, setFilter }) {
  const [filterInput, setFilterInput] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('fund_name', value);
    setFilterInput(value);
  };

  return (
    <div className='flex align-center'>
      <div className='search-icon flex align-center justify-center'>
        <FontAwesomeIcon icon='search' />
      </div>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search for fund name'}
        className='search-input'
      />
    </div>
  );
}

export default SearchFunds;
