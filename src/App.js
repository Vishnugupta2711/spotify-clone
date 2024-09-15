import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Track from "./components/Track/Track";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <Home />
      </div>
      <Track />
    </div>
  );
}

export default App;
