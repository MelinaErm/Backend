const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const Event = require('./models/eventModel');

//use middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//declare routes
app.use('/', routes);


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
      description: 'Best music concert...etc',
      remaining_tickets: 6,
      image: 'https://www.fridayhealthplans.com/en/blog/the-surprising-health-benefits-of-going-to-concerts/_jcr_content/root/container/container/image.coreimg.png/1677702333125/concert-canva-blog-png.png'
    },
    { title: 'Concert in the Park',
      city: 'Thessaloniki',
      type: 'Music',
      price: 25,
      date: '12-3-25 16:30',
      description: 'Best Park concert.',
      remaining_tickets: 3,
      image: 'https://assets1.cbsnewsstatic.com/i/cbslocal/wp-content/uploads/sites/14984641/2016/06/tustin.jpg'
     },
    { title: 'Art Exhibition',
      city: 'Athens',
      type: 'Art',
      price: 10,
      date: '4-2-25 18:00',
      description: 'Best Art exhibition.',
      remaining_tickets: 1,
      image: 'https://images.hindustantimes.com/img/2021/03/06/1600x900/pjimage_-_2021-03-06T192427.069_1615038899966_1615038907778.jpg'
    },
    { title: 'Food Festival', 
      city: 'Thessaloniki',
      type: 'Food', 
      price: 15,
      date: '19-10-26 11:00',
      description: 'Best Food Festival.',
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

//save events to the mongo db
Event.insertMany(eventsData)
    .then((savedEvents) => {
        console.log('Events saved:', savedEvents);
    })
    .catch((error) => {
        console.error('Error saving events:', error);
    });