console.log('TEST');

const express = require('express') //express 
const app = express() 

//use middlewear 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose') //mongoose
const Event = require('./models/eventModel'); //event Model


//declare routes
//get route

//Main Page with search bar
app.get('/', (req, res) => {
    res.send(`
        <form action="/search" method="post">
            <input type="text" name="city" placeholder="City">
            <input type="text" name="type" placeholder="Event Type">
            <button type="submit">Search</button>
        </form>
    `);
});


//search for events based on city, type
app.post('/search', async (req, res) => {
    const { city, type } = req.body;
    try {
        const events = await Event.find({ city, type });
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});

//get details of the specific event
//app.get('/event/:eventId', async (req, res) => {
//    const eventId = req.params.eventId;
//    try {
//        const event = await Event.findById(eventId);
//        if (!event) {
//            return res.status(404).json({ error: 'Event not found' });
//        }
//        res.json(event);
 //   } catch (error) {
 //       res.status(500).json({ error: 'Internal server error' });
 //   }
//});

//get details of the event
//app.get('/event',(req,res)=>{

 //   Object.keys(newEvent._doc).forEach(key => {
 //       res.write(`${key}: ${newEvent[key]}\n`);
 ///   });
  //  res.end();
    //console.log(newEvent)
    //res.send(newEvent)
//})

//details of all events
app.get('/events',async(req,res)=>{
    try{
        const events = await Event.find({});
        res.status(200).json(events);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

//details of a specific event
app.get('/events/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const event = await Event.findById(id);
        res.status(200).json(event);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
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
//const newEvent = new Event({
//    title: 'Sunavlia',
//    city: 'Athens',
//    type: 'Mousiki',
//    price: 0
//});

//save the event to the database
//newEvent.save()
//.then((savedEvent) => {
//    console.log('Event saved:', savedEvent);
//})
//.catch((error) => {
//    console.error('Error saving event:', error);
//});

//example of event data
const eventsData = [
    { title: 'Music Concert',
      city: 'Athens', 
      type: 'Music', 
      price: 0 },
    { title: 'Concert in the Park',
      city: 'Thessaloniki',
      type: 'Music',
      price: 25 },
    { title: 'Art Exhibition',
      city: 'Athens',
      type: 'Art',
      price: 10 },
    { title: 'Food Festival', 
      city: 'Thessaloniki',
      type: 'Food', 
      price: 15 }
    
];

//save events to the mongo db atabase
Event.insertMany(eventsData)
    .then((savedEvents) => {
        console.log('Events saved:', savedEvents);
    })
    .catch((error) => {
        console.error('Error saving events:', error);
    });