const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true  
    },
    hobbies: {
        type: [String],
        required:true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);