import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppContextProvider from "./context/AppContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
