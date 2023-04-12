import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
export function Upload() {
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
      <form method="post" action="#">
        <div class="login_box">
          <h1>Upload Video</h1>
          <div class="text_box">
            <input
              class="div_input"
              type="text"
              name="Nom"
              id="Nom"
              placeholder="Nom"
            ></input>
          </div>
          <div class="text_box">
            <input
              class="div_input"
              type="text"
              name="Description"
              id="Description"
              placeholder="Description"
            ></input>
            
          </div>
          <div class="text_box">
            <input
              class="div_input"
              type="date"
              name="date"
              id="date"
              placeholder="Date"
            ></input>
            
          </div>
          <div class="text_box">
            <input
              class="div_input"
              type="file"
              name="Video"
              id="Video"
              placeholder="Video"
            ></input>
            
          </div>

         

         
          <Link to="#">
            <input class="btne" name="Upload" value="Upload"></input>
          </Link>
          <Link to="#">
            <input class="btne_2" name="Cancel" value="Cancel"></input>
          </Link>
        </div>
      </form>
      {/* <Connexion /> */}
    </div>
  );
}

export default Upload;
