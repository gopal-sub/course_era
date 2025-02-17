const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("hello");
});

app.get('/user/login', (res, res)=>{

});
app.get('/user/signup', (res, res)=>{
    
});
app.get('/user/purchases', (res, res)=>{
    
});
app.get('/courses', (res, res)=>{
    
});
app.get('/courses/purchase', (res, res)=>{
    
});

app.get('/courses', (res, res)=>{
    
});




app.listen(3000, ()=>{
    console.log("server running ")
})