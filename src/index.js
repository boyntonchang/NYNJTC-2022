import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-brymueh6.us.auth0.com"
      clientId="lUnGIN6yt84lfu7ikGa7n6N8GrMh5GbC"
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
