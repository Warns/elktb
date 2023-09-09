// App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import WordsGrid from "./components/WordsGrid";
import TopPanel from "./components/TopPanel";
import FetchData from "./components/FetchData"; // Import the DataFetcher component

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <TopPanel />

        <div className="content-container">
          <Image />
          <WordsGrid />
          <FetchData /> 
        </div>
      </div>
    </div>
  );
}

export default App;
