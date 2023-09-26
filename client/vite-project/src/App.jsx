import { useState, useEffect } from 'react'
import Header from './Header'
import TaskList from './TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        const data = await response.json();
        console.log(data);
        setTasks(data);
      } catch (err) {
        console.log("error fetching tasks:" + err);
      }
    };
    fetchTasks()
  },[])


  return (
    <div>
      <Header />
      <TaskList />
    </div>
  )
}

export default App
