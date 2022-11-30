const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { Tournament } = require('../Models');

const tournamentSchema = require('./Tournament')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter valid Email!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    tournaments: [{type: Schema.Types.ObjectId, ref: "Tournament"}],
},
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;