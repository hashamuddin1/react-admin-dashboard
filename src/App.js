import * as React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";

function App() {
  return (
    <>
      <Router>
      <React.Fragment>
        <Navbar logoName="Tester" />
        <Routes>
            <Route exact path="/" element={<TextForm />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </React.Fragment>
      </Router>
    </>
  );
}

export default App;
