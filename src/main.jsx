import { createRoot } from "react-dom/client";
import "./index.css";

const reactElement = <h1><span></span></h1>

console.log(reactElement)
createRoot(document.getElementById("root")).render(
  reactElement
);
