import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from "./components/Hello"
import MovieList from './components/MovieList'
import ChoresList from './components/ChoresList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hello />
        <MovieList />
        <ChoresList />
      </div>
      
    </>
  )
}

export default App
