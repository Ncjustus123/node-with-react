const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type:String,
        unique:true,
        trim:true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const user = mongoose.model('User', userSchema);

module.exports = user;