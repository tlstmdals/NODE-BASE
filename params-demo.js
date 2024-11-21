const express = require('express')
const app = express()


app.get('/test/:n', function (req, res) {
    let number = parseInt(req.params.n);
    if (number> 5){
        console.log(number) // 숫자 "숫자"
    }
    res.json({
        num : number
    })
})
// app.get('/:nickname', function(req,res){
    
//     const param = req.params 
    
//     res.json({
//         channel : param.nickname
//     })
// })
app.get('/watch',function(req, res){
    // const q = req.query
    // console.log(q.v)
    // console.log(q.t)

    const {v,t} = req.query 

    console.log(v)
    console.log(t)

    res.json({
        video : v,
        timeline : t
    })
})

app.listen(3000)
//https://www.youtube.com/watch?v=lxlXMnAmS08&t=94s