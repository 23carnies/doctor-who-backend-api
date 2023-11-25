const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: String,
    image: String,
    actor: {type: String, required: true},
    charType: {type: String, enum: ['DOCTOR', 'COMPANION', 'ADVERSARY', 'OTHER'], required: true},
    planetOfOrigin: String,
    favoriteSaying: String,
    isDoctor: {type: Boolean, required: true},
    doctorNumber: Number,
    specialDoctor: {type: String},
    quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}],
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;