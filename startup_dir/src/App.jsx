import React from "react";
import Main from "./pages/Main_page";
import Second_page from "./pages/Second_page";
import Third_Page from "./pages/Third_page";
import Fourth_page from "./pages/Fourth_page";
import Fifth_page from "./pages/Fifth_page";
import Sixth_page from "./pages/Sixth_page";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Main />
        <Second_page />
        <Third_Page />
        <Fourth_page />
        <Fifth_page />
        <Sixth_page />
        <Footer />
      </div>
    </>
  );
}

export default App;
