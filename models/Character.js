const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorInfoSchema = new Schema({
    doctorNumber: [{type: Number, required: true}],
    favoriteSaying: String,
    actor: [{type: String, required: true}],
});

const companionInfoSchema = new Schema({
    name: [{type: String, required: true}],
    actor: [{type: String, required: true}],
});

const adversaryInfoSchema = new Schema({
    name: [{type: String, required: true}],
    planetOfOrigin: [String],
    actor: [String],
});

const otherCharInfoSchema = new Schema({
    name: [{type: String, required: true}],
    actor: [String],
});


const characterSchema = new Schema({
    name: String,
    Actor: {type: String, required: true},
    quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}],
    charType: {type: String, enum: ['DOCTOR', 'COMPANION', 'ADVERSARY', 'OTHER'], required: true},
    doctorInfo: [doctorInfoSchema],
    companionInfo: [companionInfoSchema],
    adversaryInfo: [adversaryInfoSchema],
    otherCharInfo: [otherCharInfoSchema],
});