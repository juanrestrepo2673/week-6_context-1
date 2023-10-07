import './App.css'
import UsingProvider from './compontents/UsingProvider'
import UsingUseContext from './compontents/UsingUseContext'
import ThemeProvider from './providers/ThemeProvider'

function App() {

  return (
    <>
      {/* <UsingProvider /> */}
    <ThemeProvider>
        <UsingUseContext />
    </ThemeProvider>
    </>
  )
}

export default App
