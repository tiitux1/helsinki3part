const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let persons = [
  { id: 1, name: 'Arto Hellas', number: '040-123456' },
  { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' }
];

// Step 6: Add error handling for adding a new person
app.post('/api/persons', (req, res) => {
  const body = req.body;
  
  // Check if name or number is missing
  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'Name or number missing' });
  }
  
  // Check if name is already in the list
  if (persons.find(p => p.name === body.name)) {
    return res.status(400).json({ error: 'Name must be unique' });
  }

  // Add the new person
  const person = {
    id: Math.floor(Math.random() * 1000000),
    name: body.name,
    number: body.number
  };
  
  persons.push(person);
  res.json(person);
});

// Delete person by id
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const personIndex = persons.findIndex(p => p.id === id);

  if (personIndex !== -1) {
    persons.splice(personIndex, 1);
    return res.status(200).json({ message: 'Person deleted successfully' });
  }

  return res.status(404).json({ error: 'Person not found' });
});

// Get all persons
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

// Get information about the phonebook
app.get('/info', (req, res) => {
  const date = new Date();
  res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${date}</p>`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
