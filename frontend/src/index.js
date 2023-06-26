import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="gaurav3521.us.auth0.com"
    clientId="9JoXhSh77vX7hUMhWN31gh3cntjFjOxq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
</Auth0Provider>
  ,
  document.getElementById("root")
);