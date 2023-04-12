import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import React, { Component } from "react";

import { Acceuil } from "./Acceuil";
import { AddMedia } from "./AddMedia";
import { Myprofile } from "./Myprofile";
import { Deconnexion } from "./Deconnexion";
import { Inscription } from "./Inscription";
import { Connexion } from "./Connexion";
import {Upload} from "./Upload";

import { Body } from "./Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        {/* <Body /> */}
        <Routes>
          <Route path={"/"} Component={Acceuil} />
          <Route path={"/addmedia"} Component={AddMedia} />
          <Route path={"/profile"} Component={Myprofile} />
          <Route path={"/deconnexion"} Component={Deconnexion} />
          <Route path={"/inscription"} Component={Inscription} />
          <Route path={"/connexion"} Component={Connexion} />
          <Route path={"/upload"} Component={Upload} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
