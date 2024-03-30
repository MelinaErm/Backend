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
    res.send(
        `
        <form action="/search" method="post">
            <input type="text" name="city" placeholder="City">
            <input type="text" name="type" placeholder="Event Type">
            <button type="submit">Search</button>
        </form>
        `
        );
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

//30/3
//get the events of a specific city
app.get('/events/:city', async (req, res) => {
    const city = req.params.city;
    try {
      const events = await Event.find({ city: city });
      res.json(events);
    } catch (error) {
      res.status(500).send('Server error');
    }
  });


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

//example of event data
const eventsData = [
    { title: 'Music Concert',
      city: 'Athens', 
      type: 'Music', 
      price: 0,
      date: '18-8-25 15:30',
      description: 'Best music concert. Please get tickets as soon as possible.',
      remaining_tickets: 6,
      image: 'https://www.fridayhealthplans.com/en/blog/the-surprising-health-benefits-of-going-to-concerts/_jcr_content/root/container/container/image.coreimg.png/1677702333125/concert-canva-blog-png.png'
    },
    { title: 'Concert in the Park',
      city: 'Thessaloniki',
      type: 'Music',
      price: 25,
      date: '12-3-25 16:30',
      description: 'Best Park concert. Please get tickets as soon as possible.',
      remaining_tickets: 3,
      image: 'https://assets1.cbsnewsstatic.com/i/cbslocal/wp-content/uploads/sites/14984641/2016/06/tustin.jpg'
     },
    { title: 'Art Exhibition',
      city: 'Athens',
      type: 'Art',
      price: 10,
      date: '4-2-25 18:00',
      description: 'Best Art exhibition. Please get tickets as soon as possible.',
      remaining_tickets: 1,
      image: 'https://images.hindustantimes.com/img/2021/03/06/1600x900/pjimage_-_2021-03-06T192427.069_1615038899966_1615038907778.jpg'
    },
    { title: 'Food Festival', 
      city: 'Thessaloniki',
      type: 'Food', 
      price: 15,
      date: '19-10-26 11:00',
      description: 'Best Food Festival. Please get tickets as soon as possible.',
      remaining_tickets: 20,
      image: 'https://www.thessalonikiguide.gr/wp-content/uploads/2019/04/street-food-festival.jpg'
    },
    { title: 'Latin Dance Festival', 
      city: 'Thessaloniki',
      type: 'Dance', 
      price: 3,
      date: '12-10-24 11:00',
      description: 'Best Latin Dance Festival. Please get tickets as soon as possible.',
      remaining_tickets: 16,
      image: 'https://www.ifreestyle.ca/uploads/6/5/1/1/65110975/published/hands-up-party-crop.jpeg?1488518711'
    }
    
];

//save events to the mongo db atabase
Event.insertMany(eventsData)
    .then((savedEvents) => {
        console.log('Events saved:', savedEvents);
    })
    .catch((error) => {
        console.error('Error saving events:', error);
    });