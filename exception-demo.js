const express = require('express')
const app = express()
app.listen(3000)

const fruits = [
    {id : 1, name : '사과'},
    {id : 2, name : '딸기'},
    {id : 3, name : '오렌지'},
    {id : 4, name : '블루베리'},
]

app.get('/fruits',(req,res)=>{
    res.json(fruits)
})
app.get('/fruits/:id',(req,res)=>{
    let id = res.params.id
    //let fruit = fruits[id-1]
    var findFruit =
        fruits.find(f => f.id == id) 
            // fruits 배열 안에 있는 객체 중 , id 값이 params.id 랑 같은 객체
    if(findFruit){
        res.json(fruit)
    }
    else/* 예외를 터트린다 = http status code 성공 X 실패!*/{
        res.status(404).json({
            msg : "전달주신 id로 저장된 과일이 없습니다"
        })
    }
})