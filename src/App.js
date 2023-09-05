// App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import WordsGrid from "./components/WordsGrid";
import TopPanel from "./components/TopPanel";
import { ContentProvider } from "./components/ContentContext"; // Import the ContentProvider

function App() {
  return (
    <ContentProvider>
      <div className="App">
        <Header />
        <div className="wrapper">
          <TopPanel />
          <div className="content-container">
            <Image />
            <WordsGrid />
          </div>
        </div>
      </div>
    </ContentProvider>
  );
}

export default App;
