console.log('this is a test no.3');
const express = require('express') //express 
const app = express()

//declare a route
//get route

app.get('/',(req,res)=>{

    res.send('hello node API')

})


app.listen(3000,()=>{
    console.log('node API app is running on port 3000')
})