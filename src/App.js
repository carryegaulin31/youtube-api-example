import axios from "axios";
import React from "react";

import SearchBar from "./components/SearchBar";

const onTermSubmit = async (term) => {
  const response = await axios.get()
}

const App = () => {
  return (
    <div className="ui container">
    <SearchBar />
      <div className="ui grid" >
        <div className="ui row">
        </div>
      </div>
    </div>
  )
}

export default App;
