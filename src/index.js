import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Adding the Google Fonts link dynamically
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
