import React from "react";
import "./style2.css";
import pr2 from './images/pr2.jpg';
import App from "./App";
import ReactDOM from "react-dom";
import gua from './images/gua2.png';
import { Auth0Provider } from "@auth0/auth0-react";

function Flag() {
  
  return (
    <div class="hero">
        
     <button
        class="Nav-left btn btn-light"
        onClick={() =>
          ReactDOM.render(
            <Auth0Provider>
            <App />
          </Auth0Provider>,
            document.getElementById("root")
          )
        }
      >
        Home
      </button>
      <div class="row f-r">
     <div class="card1 col-lg-5" style={{ width: '19rem'}}>
                  <img src={pr2} class="f-img" alt="..." />
                  </div>
                  <div class="flag-body col-lg-5">
                    <h5 class="f-title">Higher self oil </h5>
                    <p class="f-text">It improves circulation and improves lymphatic function,resulting in a naturally dewy and glowing complexion.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
                    <p class="f-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
                  </div>
                </div>
        
<div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
    </div>
  );
}
export default Flag;
