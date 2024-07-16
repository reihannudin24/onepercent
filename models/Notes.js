
const monggose = require('mongoose')

const notesSchema = new monggose.Schema({
    title : {
        type : String,
        required : true,
        max : 150,
    },
    content : {
        type : String,
        required : true,
    },
    latest_update : {
      type : Date,
    },
    user_id : {
        type : Number,
        required: true
    }
})

const Note = monggose.model('Note' , notesSchema);

module.exports = Note