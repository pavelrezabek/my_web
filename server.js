// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Slouží statické soubory z adresáře "public"
app.use(express.static('public'));


app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/Public/about.html');
});


// Spuštění serveru
app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
