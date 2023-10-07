import { createContext, useState } from 'react'

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({
    name: ''
  })

  const login = () => {
    // logica de inicio de sesion, fetch por ejemplo
    const responseData = {
      name: 'pepe'
    }
    setUser(responseData)
  }

  const logout = () => {
    // logica de inicio de sesion, fetch por ejemplo

    setUser({
      name: ''
    })
  }


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider