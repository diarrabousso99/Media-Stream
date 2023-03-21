import React from "react";
import "./Header.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Body } from "./Body";
// import "./Header_script";

export function Header() {
  return (
    <div>
      <header>
        <a href="#" class="logo">
          Media Stream
          {/* <img src="images/logo.jpg"></img> */}
        </a>

        <nav class="navbar">
          <a class="active" href="#">
            <i className="fa fa-home"> </i>
             home
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-plus"></i>
            add media
          </a>

          <a href="#">
            {" "}
            <i className="fas fa-user"></i> my profile
          </a>
          <a href="#">
            {" "}
            <i className="fa fa-sign-out"></i> sign out
          </a>
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

      <Body/>
    </div>
    
  );
  
}

