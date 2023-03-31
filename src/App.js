
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BetPage from "./BetPage"
import HomePage from "./HomePage"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import rapitorsLogo from "./assets/media/rap.png";
import "./assets/styles/_pool.scss";
import philadelphiaLogo from "./assets/media/phil.png";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<HomePage/>}></Route>
      <Route path = "/bet" element = {<BetPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;