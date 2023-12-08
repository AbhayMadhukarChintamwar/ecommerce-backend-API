import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    res.send('welcome to Ecommerce project');
})

app.listen(2000, ()=>{
    console.log('server are listenig at  port 2000')
}) 