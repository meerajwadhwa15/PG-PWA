const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
  server.use(express.static('public'))
  server.use(express.static('static'))

  server.get('*', (req, res) => {
    try {
    return handle(req, res)
    } catch(e) {
      console.log(e);
    }
  })
  server.listen(port, err => {
    if (err) throw err
    console.log(`🚀 Ready on http://localhost:${port} 🚀`)
  })
})
