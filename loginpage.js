
const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const path = require('path'); // Import path module
const Trainer = require('./Models/trainerModel'); // Corrected import path
const User = require('./config'); // Assuming 'config.js' exports the User model

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use path module to resolve views directory

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected'))
  .catch(err => console.log('Database connection error:', err));

// Routes

// Default route
app.get('/', (req, res) => {
    res.render('login2');
});

// Signup route
app.get('/signup', (req, res) => {
    res.render('signup');
});

// Signup logic
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Input validation
        if (!username || !password || password.trim().length < 6) {
            return res.status(400).send("Username and password are required, and password must be at least 6 characters long.");
        }
        
        // Check if user exists
        const existingUser = await User.findOne({ name: username });
        if (existingUser) {
            return res.send("User already exists, please choose a different username");
        }

        // Hash password and save to DB
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name: username, password: hashedPassword });
        await newUser.save();

        console.log('User created:', newUser);
        res.send('Signup successful!');
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).send('An error occurred during signup.');
    }
});

// Login logic
app.post('/login2', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Input validation
        if (!username || !password) {
            return res.status(400).send("Username and password are required.");
        }

        // Find user in DB
        const user = await User.findOne({ name: username });
        if (!user) {
            return res.send("Username not found");
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            return res.render('homes'); // Render home page on successful login
        } else {
            return res.send("Wrong password");
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).send('An error occurred during login.');
    }
});

// Homes route
app.get('/homes', (req, res) => {
    res.render('homes');
});

// Join route
app.get('/join', (req, res) => {
    res.render('join');
});

// Trainers route
app.get('/trainers', async (req, res) => {
    try {
        const trainers = await Trainer.find();
        res.render('trainers', { trainers, pageTitle: 'Our Trainers' });
    } catch (err) {
        console.error('Error fetching trainers:', err);
        res.status(500).send('Error retrieving trainers.');
    }
});

// Seed sample trainers (Optional)
// Start server
const port = 2000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
