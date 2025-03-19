const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Testidata (puhelinluettelo)
let phonebook = [
  { id: 1, name: 'Matti Meikäläinen', phoneNumber: '0401234567' },
  { id: 2, name: 'Liisa Virtanen', phoneNumber: '0507654321' },
];

// DELETE-pyyntö puhelinnumeron poistamiseksi
app.delete('/api/phonebook/:id', (req, res) => {
  const { id } = req.params;
  const phoneNumberIndex = phonebook.findIndex(entry => entry.id === parseInt(id));

  if (phoneNumberIndex !== -1) {
    phonebook.splice(phoneNumberIndex, 1); // Poistetaan puhelinnumero
    return res.status(200).send({ message: 'Puhelinnumero poistettu onnistuneesti.' });
  }

  return res.status(404).send({ message: 'Puhelinnumeroa ei löydy.' });
});

// Palvelimen käynnistäminen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
