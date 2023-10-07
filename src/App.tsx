import './App.css'
import AuthCustomer from './compontents/AuthApp/AuthCustomer'
import AuthProvider from './compontents/AuthApp/AuthProvider'
import OtherCustomer from './compontents/AuthApp/OtherCustomer'
import UsingUseContext from './compontents/UsingUseContext'
import ThemeProvider from './providers/ThemeProvider'

function App() {

  return (
    <>
    {/* <ThemeProvider>
        <UsingUseContext />
    </ThemeProvider> */}
    <AuthProvider>
      <AuthCustomer/>
      <hr/>
      <OtherCustomer/>
    </AuthProvider>
    </>
  )
}

export default App
