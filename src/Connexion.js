import React from "react";
// import "./Inscription.css";
import { Link } from "react-router-dom";
export function Connexion() {
  
  return (
    <div class="containere">
      <form method="post" action="#">
        <div class="login_box">
          <h1>Connexion</h1>
          <div class="text_box">
            <input class='div_input'
              type="text"
              name="login"
              id="login"
              placeholder="login"
            ></input>
          </div>

          <div class="text_box">
            <input class='div_input'
              type="password"
              name="password"
              id="password"
              placeholder="password"
            ></input>
          </div>
          < Link to="../upload">
          <input
            class="btne"
            name="seConnecter"
            value="Se connecter"
          ></input>
          </Link>
          <Link  class='no_compte' to="../inscription">J'ai pas de compte</Link>
          
        </div>
      </form>

      {/* <form action="#" method="post" class="form-group connexion" >
                <h1 id="titre">Connection</h1>
                <input id="input1" name="nom_utli" type="text" class="form-control input" placeholder="Nom_utlisateur" />
                <input  name="mot_d_pass" type="password" id="password" class="form-control input" placeholder="Mot de passe" />
                <button onclick={RetourConnexion} id="btnconnexion" type="submit" name="envoye" class="button"> se connecter</button> 
                <span class="span"><Link to="../inscription">creer un compte</Link></span>
            </form> */}
    </div>
  );
}

export default Connexion;
