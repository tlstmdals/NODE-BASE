const express =require("express")
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('hello world')
})

app.use(express.json())
app.post('/test',(req,res)=>{
    //body에 숨겨져온 데이터를 뿌려볼까?
    console.log(req.body.message)
    res.send(req.body.message)
})

app.listen(port, ()=> {
    console.log('example app listening on port ${port}')
})