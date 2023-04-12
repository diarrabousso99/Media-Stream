import React from "react";
import "./Header.css";
import { Connexion } from "./Connexion";
import { 
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom';
export function AddMedia() {
  return (
    <div>
      <header>
        <Link to="/" class="logo">
          Media Stream
          {/* <img src="images/logo.jpg"></img> */}
        </Link>

        <nav class="navbar">
          <Link to="/">
            <i className="fa fa-home"> </i>
            home
          </Link>
          <Link class="active " to="/addmedia">
            {" "}
            <i className="fas fa-plus"></i>
            add media
          </Link>

          <Link to="/profile">
            {" "}
            <i className="fas fa-user"></i> my profile
          </Link>
          <Link to="/deconnexion">
            {" "}
            <i className="fa fa-sign-out"></i> sign out
          </Link>
        </nav>

        <div class="icons">
          <i class="fas fa-bars" id="menu-bars"></i>
          <i class="fas fa-search" id="search-icon"></i>
        </div>
      </header>
      <form action="" id="search-form">
        <input
          type="search"
          placeholder="search here..."
          name=""
          id="search-box"
        ></input>
        <label for="search-box" class="fas fa-search"></label>
        <i class="fas fa-times" id="close"></i>
      </form>
      <Connexion />
    </div>
  );
}

export default AddMedia;
