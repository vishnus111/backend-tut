
const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()
require('dotenv').config()
const port=3000


app.get('/',(req,res)=>{
    res.send('dei its home')

})
app.get('/login',(req,res)=>{
    res.send('dei its login')

})


app.get("/twitter",(req,res)=>{
    res.send('hlooo machi')
})

app.listen(port,()=>{   
    console.log(`listening to ${port}`);
    
})

