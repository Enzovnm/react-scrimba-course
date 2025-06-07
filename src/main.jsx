import { createRoot } from "react-dom/client";
import { createElement } from "react";
import "./index.css";

const reactElement = createElement("h1", null, createElement("span", null, "I'm inside span"));

console.log(reactElement)
createRoot(document.getElementById("root")).render(
  reactElement
);
