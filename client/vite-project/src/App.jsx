import { useState } from 'react'
import Header from './Header'
import TaskList from './TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <TaskList />
    </div>
  )
}

export default App
