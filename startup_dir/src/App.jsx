import React, { useState } from "react";
import Navbar from "./components/Navbar";
import dotted_navbar from "./components/dotted_navbar";
import JoinUsButton from "./components/JoinUsButton";
import Main from "./pages/Main_page";
import Second_page from "./pages/Second_page";
import Third_Page from "./pages/Third_page";

function App() {
  return (
    <>
      <div className="overflow-hidden ">
        <dotted_navbar />
        <Main />
        <Second_page />
        <Third_Page />
      </div>
    </>
  );
}

export default App;
