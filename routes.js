const express = require('express');
const router = express.Router();
const Event = require('./models/eventModel');

//main page with search bar
router.get('/', (req, res) => {
    res.send(
        `
        <form action="/search" method="post">
            <input type="text" name="city" placeholder="City">
            <button type="submit">Search</button>
        </form>
        `
    );
});

//search for events based on city
router.post('/search', async (req, res) => {
    const { city } = req.body;
    try {
        const events = await Event.find({ city });
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
});

//details of all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//details of events in a specific city
router.get('/events/:city', async (req, res) => {
    const city = req.params.city;
    try {
        const events = await Event.find({ city });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//details of events of a specific type
router.get('/events/type/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const events = await Event.find({ type });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//details of a specific event by ID
//router.get('/events/:id', async (req, res) => {
//    try {
//        const { id } = req.params;
//        const event = await Event.findById(id);
//       res.status(200).json(event);
//    } catch (error) {
//        res.status(500).json({ message: error.message });
//    }
//});

module.exports = router;