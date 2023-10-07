
import { useContext } from "react"
import { AuthContext } from "./AuthProvider"


const AuthCustomer = ({ children }) => {
  const { user } = useContext(AuthContext)
  

  return (
    <div>
        Otro customer
      <h3>{user.name}</h3>
    </div>
  )

}

export default AuthCustomer