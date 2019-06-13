const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const axios = require('axios');

async function Fetch({ type, url, data, params }) {
  var res = await axios({
    method: type || 'get',
    url,
    data,
    params,
    timeout: 10000,
  });
  return res.data;
}

const listingDomain = 'http://listingsearch-sg.staging.guruestate.com/v1/listings';
const autoCompleteDomain = 'https://api.staging.propertyguru.com:443/v1/autocomplete';

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.get('/autocomplete', function (req, res) {
    Fetch({ url: autoCompleteDomain, params: req.query }).then(function (response) {
      res.send(response);
    });
  })
  server.get('/apilistings', function (req, res) {
    Fetch({ url: listingDomain, params: req.query }).then(function (response) {
      res.send(response);
    });
  })
  server.get('/listingsDetail/:id', function (req, res) {
    const id = req.query.id;
    delete req.query.id;
    Fetch({ url: listingDomain + '/' + id, params: req.query }).then(function (response) {
      res.send(response);
    });
  })

  server.use(express.static('public'))
  server.use(express.static('static'))

  server.get('*', (req, res) => {
    try {
      return handle(req, res)
    } catch (e) {
      console.log(e);
    }
  })
  server.listen(port, err => {
    if (err) throw err
    console.log(`🚀 Ready on http://localhost:${port} 🚀`)
  })
})
