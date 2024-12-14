import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ItemList from './ItemList';
import './App.css';

function App() {
  // List of items (books, movies, or tasks)
  const items = [
    'The Great Gatsby',
    '1984',
    'To Kill a Mockingbird',
    'The Catcher in the Rye',
    'Moby-Dick',
  ];

  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <h1>Book List</h1>
      {/* Search bar component */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Item list component */}
      <ItemList items={items} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
