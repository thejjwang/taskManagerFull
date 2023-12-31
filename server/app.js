const fs = require('fs').promises;
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const cors = require('cors');

const dbPath = '/Users/jj/Desktop/Ahsan/taskManagerFull/server/db.json'; 

// middleware
app.use(express.json());
app.use(cors());

// Function to read data from the JSON file
const fetchData = async () => {
  try {
    // console.log('Current working directory:', process.cwd());
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from db.json:', error);
    return { tasks: [] }; // Return an empty array as default
  }
};

// GET all tasks
app.get('/api/tasks', async (req, res) => {
  const data = await fetchData();
  res.json(data.tasks);
});

// Create a new task
app.post('/api/tasks', (req, res) => {
  // Implement logic to create a new task and save it to db.json
  // Respond with a success message or the newly created task
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  // Implement logic to update the task with the specified taskId
  // Respond with a success message or the updated task
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    // Fetch current data from db.json
    const data = await fetchData();
    // Filter out the task to be deleted
    const updatedTasks = data.tasks.filter((task) => task.id !== taskId);
    // Update the data with the filtered tasks
    data.tasks = updatedTasks;
    // Save the updated data back to db.json
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
    // Respond with a success message
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
