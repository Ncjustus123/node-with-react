const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String},
    description:{type: String},
    duration:{type: Number},
    date:{type: Date},
}, {
    timestamps: true,
});

const exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = exercise;