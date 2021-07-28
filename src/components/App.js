import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [onSearch, setOnSearch] = useState('')

  function onSearchData(searchData) {
    setOnSearch(searchData)
  }

  return (
    <div className="app">
      <Header onSearchData={onSearchData}/>
      <ListingsContainer onSearch={onSearch}/>
    </div>
  );
}

export default App;
