const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote: {type: String, required: true},
    speaker: {type: String, required: true},
    episode: [{type: mongoose.Schema.Types.ObjectId, ref:'Episode'}]

});

const episodeSchema = new Schema({
    title: {type: String},
    image: {type: String},
    series: {type: String},
    seriesEpisode: {type: Number},
    specialEpisode: {type: Boolean},
    specialType: {type: String},
    rating: {type: Number},
    writer: {type: String},
    director: {type: String},
    synopsis: {type: String},
    originalAirDate: {type: Date},
    imdbLink: {type: String},
    status: {type: String, enum: ['WATCHED', 'INTERESTED', 'NOT_INTERESTED', 'UNKNOWN']},
    quotes: [quoteSchema],
    doctorIds: {type: Schema.Types.ObjectId, ref: 'Companion'},
    companionIds: {type: Schema.Types.ObjectId, ref: 'Companion'},
    adversaryIds: {type: Schema.Types.ObjectId, ref: 'Companion'},
    otherIds: {type: Schema.Types.ObjectId, ref: 'Companion'},
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;