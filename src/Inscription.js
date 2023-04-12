import React from "react";
import "./Inscription.css";
//import "./bootstrap.min.css";
import { Link } from "react-router-dom";
export function Inscription() {
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
          <Link class="active" to="/addmedia">
            {" "}
            <i className="fas fa-plus"></i>
            add media
          </Link>

          <Link  to="/profile">
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
      <div class="containere">
        <form method="post" action="#">
          <div class="login_box">
            <h1>Inscription</h1>
            <div class="text_box">
              <input
                class="div_input"
                type="text"
                name="nom_prenom"
                id="nom_prenom"
                placeholder="nom et prenom"
              ></input>
            </div>
            <div class="text_box">
              <input
                class="div_input"
                type="text"
                name="login"
                id="login"
                placeholder="login"
              ></input>
            </div>

            <div class="text_box">
              <input
                class="div_input"
                type="password"
                name="password"
                id="password"
                placeholder="password"
              ></input>
            </div>
            <input
              type="submit"
              //   onclick={RetourConnexion}
              class="btne"
              name="seConnecter"
              value="Creer un compte"
            ></input>
            <Link class="no_compte" to="../connexion">
              Se connecter
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
