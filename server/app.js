const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


const port = process.env.PORT || 5001;
const dbPath = './server/db.json'; 

// app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', (req, res) => {
  res.send('hello')
    // res.sendFile(path.join(__dirname, '..', 'client', 'vite-project', 'index.html'));
})

app.get('/api/tasks', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    try {
      const dbData = JSON.parse(data);
      const tasks = dbData.Tasks;
      res.json({ tasks });
    } catch (parseError) {
      console.error('Error parsing db.json:', parseError);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
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
