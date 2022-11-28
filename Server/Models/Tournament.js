const { Schema, model } = require('mongoose');

// Schema to create tournament model
const tournamentSchema = new Schema(
    {
        published: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        meta: {
            players: Number,
            bookmarks: Number,
        },
        description: {
            type: String,
            minLength: 15,
            maxLength: 500,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
tournamentSchema
    .virtual('playerCount')
    // Getter
    .get(function () {
        return this.meta.players;
    });

// Initialize our Post model
const Tournament = model('tournament', tournamentSchema);

module.exports = Tournament;