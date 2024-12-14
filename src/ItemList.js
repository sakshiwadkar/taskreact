import React from 'react';

function ItemList({ items, searchTerm }) {
  // Filter items based on the search term
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <li>No items found</li>
      )}
    </ul>
  );
}

export default ItemList;
