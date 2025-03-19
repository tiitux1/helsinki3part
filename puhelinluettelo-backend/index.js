const express = require('express');
const app = express();

const persons = [
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" }
];

// Reitti, joka palauttaa henkilölistan JSON-muodossa
app.get('/api/persons', (req, res) => {
    res.json(persons);
});

// Reitti, joka palauttaa info-sivun
app.get('/info', (req, res) => {
    const numberOfPersons = persons.length;
    const currentTime = new Date();

    res.send(`
        <h1>Phonebook Info</h1>
        <p>Phonebook has info for ${numberOfPersons} people</p>
        <p>${currentTime}</p>
    `);
});

// Käynnistetään palvelinta
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
