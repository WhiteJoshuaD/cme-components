import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CmeComponentsProvider } from "../lib/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CmeComponentsProvider apiKey={import.meta.env.VITE_API_KEY}>
      <App />
    </CmeComponentsProvider>
  </React.StrictMode>
);
