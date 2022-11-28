const { AuthenticationError } = require('apollo-server-express');
const { User, Course, Tournament } = require('../Models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
        throw new AuthenticationError('You must be logged in')
        },
        courses: async (parent, args, context) => {
            if (context.user) {
                return Course.find()
            }
        },
        tournaments: async (parent, args, context) => {
            if (context.user) {
                return Tournament.find()
            }
        }
    },

    Mutation:  {
        loginUser: async ( parent, { email, password }) => {
            const user = await User.findOne({email});

            if (!user) {
                throw new AuthenticationError('There is no profile associated with this email')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError ('Incorrect email or password')
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async ( parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user)
            return { token, user };
        },
        registerTournament: async ( parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $addToSet: { tournaments: args }},
                    { new: true, runValidators: true },
                )
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in to register for a tournamet')
        },
    }
}

module.exports = resolvers