import { useState, useEffect } from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import CrudTask from "./CrudTask";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server using an API call
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/tasks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Fetch tasks when the component mounts
  }, []);
  
  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // If the task was successfully deleted, update the task list.
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="bg-blue-200 min-h-screen">
      <Header />
      <CrudTask setTasks={setTasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
