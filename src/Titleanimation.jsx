import React,{useState,useEffect} from 'react'
import RubberBand from 'react-reveal/RubberBand';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function Titleanimation() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme) 
  }, [theme]);

  return (
    <div className="title">
      <RubberBand duration={3000}>
        <div onClick={toggleTheme}>pic gallery</div>
      </RubberBand>
    </div>
  )
}

export default Titleanimation;

