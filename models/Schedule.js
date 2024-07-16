
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
        max : 100,
    },
    description : {
        type : String, max : 200
    },
    reminder : {
        type : String,
    },
    start_time :  {
        type : Date
    },
    end_time : {
        type : Date
    },
    user_id : {
        type : Number,
        required: true
    }
})

const Schedule = mongoose.model('Schedule' , scheduleSchema);

module.exports = Schedule;