import React, { useState } from "react";
import "../styles/theme.css"; // Importer le fichier CSS du thème

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.className = isDark ? "light-theme" : "dark-theme"; // Appliquer le thème choisi
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDark ? "Passer au thème clair" : "Passer au thème sombre"}
    </button>
  );
};

export default ThemeToggle;
