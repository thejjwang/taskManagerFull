import { useState, useEffect } from 'react'
import Header from './Header'
import TaskList from './TaskList'

function App() {
  const [tasks, setTasks] = useState([])


  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks()
  },[])


  return (
    <div>
      <Header />
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
