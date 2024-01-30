const express = require('express');
const mongoose = require('mongoose');
const pasth = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");


const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.set("view engine", 'ejs');

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("contact");
});

app.post('/contact', async (req, res) => {
    const { name, email, mobile, message } = req.body;

    
    try {
        const ContactModel = mongoose.model('users');
        const userData = await ContactModel.create({ name, email, mobile, message });
        console.log('Contact data saved:', userData);
      
    } catch (error) {
        console.error('Error saving contact data:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});


app.post('/feedback', async (req, res) => {
    const { email, rating, comments } = req.body;

    try {
        const FeedbackModel = mongoose.model('feedback');
        const feedbackData = await FeedbackModel.create({ email, rating, comments });
        console.log('Feedback data saved:', feedbackData);
        
    } catch (error) {
        console.error('Error saving feedback data:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is runnig on port: ${PORT}`);
});