import React, { useEffect, useState } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <label className="toggleMode" onClick={() => toggleTheme() }>
        <input type="checkbox" />
      </label>
    </>
  )
}
export default DarkMode