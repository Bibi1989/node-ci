const express = require('express');

const app = express()

const port = '4005'

app.get('*', (req, res) => {
  const paths = req.path.split('%20').join(' ')

  res.json({paths})
})
app.post('/post', (req, res) => {
  const query = req.query

  res.redirect('/')
})

app.listen(port, () => console.log(`Server running on port ${port}`))