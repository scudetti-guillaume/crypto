const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get('/crypto-prices', (req, res) => {
  fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest ', {
    headers: {
      'X-CMC_PRO_API_KEY': "7add7698-9b5b-4e40-8f66-8271a2dce050"
    }
  })
    .then(response => response.json())
    .then(data => {
        console.log(data.data[0].name);
        console.log(data.data[0].symbol);
        console.log(data.data[0].slug);
        console.log(data.data[0].quote.USD.price);
      res.json(data);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});