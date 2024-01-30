const { text } = require("express");
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/contact_det");

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("database cannot be connected");
});

const FeedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

const collection2 =  mongoose.model("feedback", FeedbackSchema);

module.exports = collection2;
