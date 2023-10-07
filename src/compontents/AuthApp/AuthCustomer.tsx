
import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import OtherCustomer from './OtherCustomer'


const AuthCustomer = () => {
  const { user, login, logout } = useContext(AuthContext)

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <h3>{user.name}</h3>
      <OtherCustomer/>
    </div>
  )

}

export default AuthCustomer