import React from "React";
import "App.css";
import "./App.css";

import SearchBar from "./Business/SearchBar.js/SearchBar.js";
import BusinessList from "./Business/BusinessList/BusinessList.js";

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
