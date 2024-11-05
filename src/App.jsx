
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThreeScene from './three'

import './App.css'

function App() {
  

  return (
    <>
      <div>
        <h1> Yo its ya boi natedog</h1>
        <p> TESTING .......</p>
        <h1> WE are testing this thing out</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <ThreeScene />
      </div>
      
    </>
  )
}

export default App
