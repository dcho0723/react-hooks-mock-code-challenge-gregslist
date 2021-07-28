import React, { useState } from "react";

function Search({onSearchData}) {
  const [onSearch, setOnSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSearchData(onSearch)
    
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={onSearch}
        onChange={(e) => setOnSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
