const { text } = require("express");
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/contact_det");

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("database cannot be connected");
});


const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const FeedbackSchema = new mongoose.Schema({
email: {
    type: String,
    required: true
},
rating:{
    type: Number,
    required: true
},
comments: {
    type: String,
    required: true
}
});

const ContactModel = mongoose.model('users', ContactSchema);
const FeedbackModel = mongoose.model('feedback', FeedbackSchema);

module.exports = { ContactModel, FeedbackModel };
