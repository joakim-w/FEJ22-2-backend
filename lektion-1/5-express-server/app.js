const express = require('express');
const path = require('path')
const messages = require('./data/messages.json')

const app = express();

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log('server running on http://localhost:' + PORT))


app.get('/', (req, res) => {
  // res.send('<h1>HomePage</h1>')
  // res.sendFile('./pages/index.html', { root: __dirname })
  res.sendFile(path.join(__dirname, 'pages', 'index.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'))
})
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})


app.get('/api/messages', ( req, res ) => {
  res.send(messages)
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'pages', '404.html'))
})