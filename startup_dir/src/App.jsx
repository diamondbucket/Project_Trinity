import React, { useState } from "react";
import Navbar from "./components/Navbar";
import dotted_navbar from "./components/dotted_navbar";
import JoinUsButton from "./components/JoinUsButton";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <dotted_navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
