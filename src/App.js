// App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import WordsGrid from "./components/WordsGrid";
import TopPanel from "./components/TopPanel";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="top-panel">
          <TopPanel />
        </div>
        <div className="content-container">
          <Image />
          <WordsGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
