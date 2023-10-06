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
  
  return (
    <div>
      <Header />
      <CrudTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
