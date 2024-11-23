const mongoose = require('mongoose');

// Define the schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the model
const Collection = mongoose.model('Amtics', LoginSchema);

module.exports = Collection;
