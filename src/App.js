// App.js
import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ImageComponent from "./components/ImageComponent";
import WordsComponent from "./components/WordsComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="wrapper">
        <div className="panel">Panel TBA</div>
        <div className="content-container">
          <ImageComponent />
          <WordsComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
