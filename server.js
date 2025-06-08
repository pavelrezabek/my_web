// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Slouží statické soubory z adresáře "public"
app.use(express.static('public'));


// routování pro statické soubory
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css');
});
app.get('/compiled/script.js', (req, res) => {
  res.sendFile(__dirname + '/public/compiled/script.js');
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

//change


// Spuštění serveru
app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
