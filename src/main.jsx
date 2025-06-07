import { createRoot } from "react-dom/client";
import { createElement } from "react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  createElement("h1", null, "Hello from createElement!")
);
