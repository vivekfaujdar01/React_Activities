import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className={`p-2 border-2 rounded ${theme === "dark" ? "text-white border-white" : "text-black border-black"}`}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default Button;
