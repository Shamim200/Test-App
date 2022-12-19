import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AppProvider } from "./components/context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
