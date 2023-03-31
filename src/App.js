
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BetPage from "./BetPage"
import HomePage from "./HomePage"
import "./assets/styles/_pool.scss";

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