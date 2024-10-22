import { useState } from 'react'
import './App.css'
import ListGroup from "./components/ListGroup"
import MovieList from './components/MovieList'
import ChoresList from './components/ChoresList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MovieList />
        <ChoresList />
        <ListGroup />

      </div>
      
    </>
  )
}

export default App
