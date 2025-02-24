import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PrivyProvider
    appId={import.meta.env.VITE_PRIVY_APP_ID} 
    
    config={{
      appearance: {
        theme: "dark",
      },
      embeddedWallets: {
        createOnLogin: "users-without-wallets",
      },
      authentication: {
        redirectUri: window.location.origin, // Ensures correct CORS handling
      },
    }}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </PrivyProvider>,
);