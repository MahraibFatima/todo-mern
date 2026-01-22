const mongoose = require('mongoose');
const { title } = require('process');
const list = require('./list');

const userShema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    lists: [{type: mongoose.Schema.Types.ObjectId, ref: 'List', default: []}]
},
{ timestamps: true }
);

module.exports = mongoose.model('User', userShema);