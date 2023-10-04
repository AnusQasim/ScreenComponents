// import "./App.css";
import Dashboard from "./ScreenComponents/Dashboard";
import Detail from "./ScreenComponents/Deatil";
import PostAd from "./ScreenComponents/PostAd";
import React, { useState } from "react";

function App() {
  const [activeComponents, setActiveComponents] = useState();

  function components() {
    switch (activeComponents) {
      case "dashboard":
        return <Dashboard />;
      case "detail":
        return <Detail />;
      case "postAd":
        return <PostAd />;
      default:
        return null;
    }
  }
  return (
    <div>
      <h1>ScreenWise App</h1>
      <button onClick={() => setActiveComponents("dashboard")}>
        Dashboard
      </button>
      <br />
      <button onClick={() => setActiveComponents("detail")}>Detail</button>
      <br />
      <button onClick={() => setActiveComponents("postAd")}>PostAd</button>

      {components()}
    </div>
  );
}

export default App;
