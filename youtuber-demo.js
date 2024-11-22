const express = require("express")
const app = express()

app.listen(1243)

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

    var youtubers = {}
    db.forEach(function(value,key){
        youtubers[key] = value
    })
    res.json((youtubers))
})

app.get('/youtubers/:id',function(req,res){
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
app.post('/youtubers',(req,res)=>{
   console.log(req.body)
   // Map(db)에 저장(set) 해주어야 한다
   db.set(id++, req.body)
   res.json({
    message : `${db.get(id - 1).Title}님, 유튜버 등록을 축하드립니다`
   })
})

app.delete('/youtubers/:id',(req,res)=>{
    let {id} = req.params
    id = parseInt(id)
    var youtuber = db.get(id)
    if(youtuber === undefined){
        res.json({
            msg : `${id}번 유튜버는 가입된 유튜버가 아닙니다`
        })
    } else {
        const name = youtuber.Title
        db.delete(id)    
        res.json({
            msg : `${name}님이 탈퇴하였습니다`
        })
    }
})

app.delete("/youtubers",function(req,res){
    
    var msg = ""

    if(db.size >= 1){
        db.clear()
            msg ="전체 유튜버가 삭제되었습니다"
    } else {
            msg = "삭제할 유튜버가 없습니다"
    }
    res.json({
        message : msg
    })
})

app.put("/youtubers/:id", (req,res)=>{
    let {id} = req.params
    id = parseInt(id)
    var youtuber = db.get(id)
    if(youtuber === undefined){
        res.json({
            msg : `요청하신 ${id}번은 없는 유튜버입니다`
        })
    } else{
        var newTitle = req.body.Title
        var oldTitle = youtuber.Title
        youtuber.Title = newTitle
        db.set(id, youtuber)
        res.json({
            msg : `${oldTitle}님, 채널명이 ${newTitle}로 수정되었습니다`
       })
    }
})