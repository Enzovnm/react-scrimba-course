import { createRoot } from "react-dom/client";
import "./index.css";

const MainContent = () => {
  return <h1>React is great!</h1>;
};

createRoot(document.getElementById("root")).render(<MainContent />);
