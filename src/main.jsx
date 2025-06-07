import { createRoot } from "react-dom/client";
import "./index.css";

const MainContent = () => {
  return <h1>React is great!</h1>;
};

const text = document.createElement("h1");

text.textContent = "Texto de teste";

text.className = "header";

const divRoot = document.getElementById("root");

divRoot.appendChild(text);

createRoot(document.getElementById("root")).render(<MainContent />);
