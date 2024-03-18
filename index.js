console.log('this is a test');


const express = require('express') //express 
const app = express()

//app.use(express.json()) //use middlewear 

const mongoose = require('mongoose') //mongoose
const Event = require('./models/eventModel');


//declare a route
//get route
app.get('/',(req,res)=>{
    res.send('hello node API')

})

app.get('/blog',(req,res)=>{
    res.send('Hello Blog')
})

//get details of the event
app.get('/event',(req,res)=>{
    console.log(newEvent)
    res.send(newEvent)
})


//mongoose connection (mongo db)
mongoose.connect('mongodb+srv://admin:12!56!79@devapi.arzcgkl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=DevAPI')
.then(()=>{
    app.listen(3000,()=>{
        console.log('node API app is running on port 3000')
    })
    
    console.log('connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})

//create a new event
const newEvent = new Event({
    title: 'Sunavlia',
    city: 'Athens',
    type: 'Mousiki',
    price: 0
});

//save the event to the database
newEvent.save()
    .then((savedEvent) => {
        console.log('Event saved:', savedEvent);
    })
    .catch((error) => {
        console.error('Error saving event:', error);
    });