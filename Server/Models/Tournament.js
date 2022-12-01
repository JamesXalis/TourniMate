const { Schema, model } = require('mongoose');

// Schema to create tournament model
const tournamentSchema = new Schema(
    {
        tournamentName: {
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
        course: {
            type: String
        },
        tournamentPrice: {
            type: Number
        },
        link:{
            type: String
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
// tournamentSchema
//     .virtual('playerCount')
//     // Getter
//     .get(function () {
//         return this.meta.players;
//     });

// Initialize our Post model
const Tournament = model('Tournament', tournamentSchema);

module.exports = Tournament;
