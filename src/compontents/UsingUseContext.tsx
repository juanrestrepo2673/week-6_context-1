import { useContext } from 'react'
import ThemeContext from '../providers/ThemeContext'

export default function UsingUseContext() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return (
        <div>UsingUseContext {theme}
        
        
        <button onClick={toggleTheme}>Cambiar Modo</button>
        </div>
    )
}
