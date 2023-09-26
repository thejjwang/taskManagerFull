const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const port = 5001;
const dbPath = './server/db.json'; 

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
})

app.get('/db.json', (req, res) => {
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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
