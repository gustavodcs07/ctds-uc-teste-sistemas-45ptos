import { useState } from 'react'
import './App.css'
import CadastroGeral from './components/CadastroGeral'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CadastroGeral/>
    </>
  )
}

export default App
