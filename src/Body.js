import React from "react";
import "./Body.css";
import ndeye_image from "./assets/chien.jfif";


export function Body() {
  return (
    <div class="light-background body">
    <div class=" row">
      <div class="layer-stretch">
        <div class="layer-wrapper row">
          <div>
            <div class="panel panel-default m-0 ">
              <div class="panel-head">
                <div class="panel-title text-center">
                  <h3 class='title'>Popular videos</h3>
                </div>
              </div>
              <div class="panel-body">
                <div class="row text-center">
                  <div class="col-sm-6 col-md-4">
                    <div class="card">
                      <div class="card-body">
                        {/* <h5 class="card-title">Titre de la vidéo 1</h5> */}
                        <div class="video-container">
                          <video
                            width="100%"
                            height="auto"
                            poster={ndeye_image}
                          >
                            <source
                              src="./assets/Karna.MP4"
                              type="video/mp4"
                            ></source>
                          </video>
                          <div class="comment-text">
                            <h3>Karma</h3>
                            <p>
                              420 Views <span> Drame </span>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="card">
                      <div class="card-body">
                        {/* <h5 class="card-title">Titre de la vidéo 2</h5> */}
                        <div class="video-container">
                          <video width="100%" height="auto" controls>
                            <source
                              src="./assets/Karna.MP4"
                              type="video/mp4"
                            ></source>
                            Votre navigateur ne prend pas en charge la lecture
                            de vidéos HTML5.
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <div class="card">
                      <div class="card-body">
                        {/* <h5 class="card-title">Titre de la vidéo 3</h5> */}
                        <div class="video-container">
                          <video width="100%" height="auto" controls>
                            <source
                              src="./assets/Karna.MP4"
                              type="video/mp4"
                            ></source>
                            Votre navigateur ne prend pas en charge la lecture
                            de vidéos HTML5.
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
