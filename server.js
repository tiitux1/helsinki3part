const express = require('express');
const app = express();
app.use(express.json())
const port = 3001;

// Sample data
const persons = [
  { id: 1, name: 'John Doe', number: '123-456-7890' },
  { id: 2, name: 'Jane Smith', number: '234-567-8901' },
  { id: 3, name: 'Bob Johnson', number: '345-678-9012' }
];

// API route
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.post('/api/notes', (request, response) => {
    const note = request.body
    console.log(note)
    response.json(note)
  })