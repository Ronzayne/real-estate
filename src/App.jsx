import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./layout.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./routes/homePage/HomePage.jsx";
function App() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
