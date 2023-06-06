import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { DataProvider } from "../store/Context";

import App from "./App.js";

hydrateRoot(
  document,
  <DataProvider data={window.initial_state}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
