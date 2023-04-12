import React from "react";
import { Body } from "./Body";
import ndeye_image from "./assets/OIP.jpg";
import "./Myprofile.css";
import { Link } from "react-router-dom";
import { MyVideo } from "./MyVideo";
export function Myprofile() {
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
          <Link  to="/addmedia">
            {" "}
            <i className="fas fa-plus"></i>
            add media
          </Link>

          <Link class="active " to="/profile">
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
      <div class="profil">
        <img src={ndeye_image} alt="profil" />
        <div class="d1">
          <div class="d2">
            <span id="nom">Lamine Diaw</span>
          </div>
          <span class="d3">11,5K abonnées</span>
        </div>
      </div>
      <br />
      {/* <nav id="nav0">
                <Link id="nav1" to="../profile">Acceuil</Link>
                <Link class="nav" to="../profile">Mes video</Link>
                <Link class="nav" to="../profile">Privées</Link>
                <Link class="nav" to="../profile">PlayList</Link>
            </nav> */}
      {/* <hr id="sep" /> */}
      {/* <Body />   */}
      <MyVideo />
    </div>
  );
}

export default Myprofile;
