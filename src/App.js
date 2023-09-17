import React from "react";
// import Home from "./routes/Home";
import './App.css';
// import { HashRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Routes, Route } from "react-router-dom";
import About from './routes/About';
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Datail";

function App() {
  return (
    // <HashRouter>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/movie-detail" element={<Detail />} /> */}
      </Routes>
    </Router>
    // </HashRouter>
  );
}

export default App;

// React Router v6에서는 Route가 항상 Routes안에 있어야 한다 
// React Router v6에서는 element 속성을 사용하여 컴포넌트를 렌더링해야 합니다. 따라서 다음과 같이 코드를 수정해야 합니다:
