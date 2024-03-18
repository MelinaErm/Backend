console.log('this is a test no.3');
const express = require('express') //express 
const app = express()

const mongoose = require('mongoose') //mongoose


//declare a route
//get route
app.get('/',(req,res)=>{
    res.send('hello node API')

})

app.get('/blog',(req,res)=>{
    res.send('Hello Blog')
})

app.listen(3000,()=>{
    console.log('node API app is running on port 3000')
})


//mongoose connection (mongo db)

mongoose.connect('mongodb+srv://admin:12!56!79@devapi.arzcgkl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DevAPI')
.then(()=>{
    console.log('connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})