import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search for a book"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} // Update the search term on input change
    />
  );
}

export default SearchBar;
