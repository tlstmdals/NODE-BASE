const express = require('express')
const app = express()

let db = new Map()

let NoteBook = {
    Name : 'NoteBook',
    price : 3000
}
let Cup = {
    Name : 'Cup',
    price : 1000
}
let Chair = {
    Name : 'Chair',
    price : 5000
}
db.set(1,NoteBook)
db.set(2,Cup)
db.set(3,Chair)

app.get('/:id',function(req,res){
    let {id} = req.params
    id = parseInt(id)


    if (db.get(id) == undefined){
        res.json({
            msg : "없는 상품입니다"
        })
    } else {
        product = db.get(id)
        // product.id = id 객체에 값 추가하기
        product["id"] = id 
        res.json(product)
    }
})
app.listen(3000)