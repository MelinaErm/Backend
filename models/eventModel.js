//mongoose 
const mongoose = require('mongoose')

//create event model and event schema
const eventSchema = mongoose.Schema(

    {
        title:   { 
        type: String,
        required: [true, "Please enter Event title"]
        },

        city:   { 
            type: String,
            required: [true, "Please enter Event city"]
        },

        type:   {
            type: String,
            required: [true,"Please enter Event type"]
        },

        price: {
            type: Number,
            required: true,

        },

        date: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        remaining_tickets: {
            type: Number,
            required: true,

        },
        
        image: {
            type: String,
            required: true,
        }
        

    },
    {
        timestamps: true
    }

)


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;