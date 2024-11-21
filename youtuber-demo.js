const express = require("express")
const app = express()

app.listen(3000)

let youtuber1 = {
    Title : '태오',
    sub : '54.8만명',
    videoNum : '726개'
}
let youtuber2 = {
    Title : '침착맨',
    sub : '100만명',
    videoNum : '6.6천개'
}
let youtuber3 = {
    Title : '먼닉',
    sub : '8만명',
    videoNum : '69개'
}
let db = new Map()

let id = 1
db.set(id++,youtuber1)
db.set(id++,youtuber2)
db.set(id++,youtuber3)

app.get("/youtubers",function(req,res){
    res.json(db.get())
})

app.get('/youtuber/:id',function(req,res){
    let {id} = req.params
    id = parseInt(id)

    const youtuber = db.get(id)
    if(youtuber == undefined){
        res.json({
            msg : "유튜버 정보를 찾을 수 없습니다"
        })
    }
    else {
        res.json(youtuber)
    }
})
app.use(express.json()) // http 외 모듈인 '미들웨어' : json 설정
app.post('/youtuber',(req,res)=>{
   console.log(req.body)
   // Map(db)에 저장(set) 해주어야 한다
   db.set(id++, req.body)
   res.json({
    message : `${db.get(id - 1).Title}님, 유튜버 등록을 축하드립니다`
   })
})