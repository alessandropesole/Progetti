import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Game />
     
    </>
  )
}

export default App