const { Schema, model } = require('mongoose');

// Schema to create tournament model
const tournamentSchema = new Schema(
    {
        tournameName: {
            type: String,
        },
        tournamentDate: {
            type: String,
        },
        tournamentDescription: {
            type: String,
        },
        tournamentImage: {
            type: String,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// Initialize our Post model
const Tournament = model('tournament', tournamentSchema);

module.exports = Tournament;
