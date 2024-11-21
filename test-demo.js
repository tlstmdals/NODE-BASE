const express = require('express')
const app = express()

app.listen(3000)
// API : GET + "http://localhost:3000/test"
// "TEST SUCCES"
app.get('/test', function (req, res) {
  res.send('TEST SUCCES')
  
})
// API : GET + "http://localhost:3000/test/1"
// 'ONE !!'
app.get('/test/1', function (req, res) {
  res.send('ONE !!')
  
})
app.listen(3000)