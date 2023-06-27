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
        
  <head>
    <title>Buy cool new product</title>
  </head>
    <form action="https://check-sns5.vercel.app/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
    </div>
  );
}
export default Flag;
