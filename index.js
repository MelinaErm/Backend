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
//const eventsData = [
//  { 
//      title: 'Classical Music Concert',
//      city: 'Athens', 
//      type: 'Music', 
//      price: 0,
//      date: '2025-08-25 15:30',
//      description: 'Immerse yourself in the timeless beauty of classical music at our concert in Athens. Renowned musicians from around the world will grace the stage, performing masterpieces by Mozart, Beethoven, and more. Join us for an unforgettable evening of musical brilliance under the stars.',
//      remaining_tickets: 6,
//      image: 'https://www.fridayhealthplans.com/en/blog/the-surprising-health-benefits-of-going-to-concerts/_jcr_content/root/container/container/image.coreimg.png/1677702333125/concert-canva-blog-png.png'
//  },
//  { 
//      title: 'Park Concert',
//      city: 'Thessaloniki',
//      type: 'Music',
//      price: 25,
//      date: '2025-03-12 16:30',
//      description: 'Escape to natures embrace and enjoy the harmonious melodies of live music at our park concert in Thessaloniki. Surrounded by lush greenery and the gentle rustle of leaves, this concert promises an enchanting experience for music lovers of all ages. Bring your picnic blanket and unwind amidst the soothing sounds of talented musicians.',
//      remaining_tickets: 3,
//      image: 'https://assets1.cbsnewsstatic.com/i/cbslocal/wp-content/uploads/sites/14984641/2016/06/tustin.jpg'
//  },
//  { 
//      title: 'Art Exhibition',
//      city: 'Athens',
//      type: 'Art',
//      price: 10,
//      date: '2025-02-04 18:00',
//      description: 'Discover the vibrant world of contemporary art at our exhibition in Athens. From captivating paintings to striking sculptures, immerse yourself in a diverse showcase of talent from both established and emerging artists. Engage with the artwork, meet the creators, and let your imagination roam free amidst a gallery filled with creativity and inspiration.',
//      remaining_tickets: 1,
//      image: 'https://images.hindustantimes.com/img/2021/03/06/1600x900/pjimage_-_2021-03-06T192427.069_1615038899966_1615038907778.jpg'
//  },
//  { 
//      title: 'Food Festival', 
//      city: 'Thessaloniki',
//      type: 'Food', 
//      price: 15,
//      date: '2026-10-19 11:00',
//      description: 'Savor the flavors of Greece at our annual food festival in Thessaloniki. Indulge in a culinary journey through the rich tapestry of Greek cuisine, from mouthwatering souvlaki to decadent baklava. With a variety of vendors offering delectable dishes and refreshing beverages, this festival is a celebration of gastronomic delights that will tantalize your taste buds and leave you craving for more.',
//      remaining_tickets: 20,
//      image: 'https://www.thessalonikiguide.gr/wp-content/uploads/2019/04/street-food-festival.jpg'
//  },
//  { 
//      title: 'Latin Dance Festival', 
//      city: 'Thessaloniki',
//      type: 'Dance', 
//      price: 3,
//      date: '2024-10-12 11:00',
//      description: 'Feel the rhythm, embrace the passion, and dance the night away at our Latin Dance Festival in Thessaloniki. From the sensual moves of salsa to the energetic beats of merengue, immerse yourself in the vibrant world of Latin dance. Whether you are a seasoned dancer or a novice enthusiast, join us for a fiesta filled with electrifying performances, lively music, and unforgettable memories.',
//      remaining_tickets: 16,
//      image: 'https://www.ifreestyle.ca/uploads/6/5/1/1/65110975/published/hands-up-party-crop.jpeg?1488518711'
//  }
//];



//save events to the mongo db
//Event.insertMany(eventsData)
//    .then((savedEvents) => {
//        console.log('Events saved:', savedEvents);
//    })
//    .catch((error) => {
//        console.error('Error saving events:', error);
//    });