import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './containers/section1.jsx'
import Section2 from './containers/section2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="body">
    <Section1 />
    <Section2 />
    </div>
  )
}

export default App
