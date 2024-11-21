const express = require('express')
const app = express()


let book = {
	title : "Node.js를 공부해보자",
	price : 20000,
	desscription : "이책의 설명"
}

app.get('/products/1', function(req, res){
  res.json(book)
  // res.send(20000)
})

app.listen(3000)