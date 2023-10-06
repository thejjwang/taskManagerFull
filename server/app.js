const fs = require('fs').promises;
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

const dbPath = '/Users/jj/Desktop/Ahsan/taskManagerFull/server/db.json'; 

// middleware
app.use(express.json());

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
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  // Implement logic to delete the task with the specified taskId
  // Respond with a success message
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
