import { useState, createContext } from 'react'


const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => ()
});


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')


  const toggleTheme = () => {
    console.log('toggle')
    setTheme(theme === 'light' ? 'dark' : 'light')
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}


export default ThemeProvider