import React from "react";

import Main from "./pages/Main_page";
import Second_page from "./pages/Second_page";
import Third_Page from "./pages/Third_page";
import Fourth_page from "./pages/Fourth_page";

function App() {
  return (
    <>
      <div className="overflow-hidden ">
        <dotted_navbar />
        <Main />
        <Second_page />
        <Third_Page />
        <Fourth_page />
      </div>
    </>
  );
}

export default App;
