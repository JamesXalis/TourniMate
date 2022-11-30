const { Schema, model } = require('mongoose');
const { Tournament } = require ('./Tournament');


const tournamentSchema = require('./Tournament')

// Schema to create course model
const courseSchema = new Schema({
        courseName: {
            type: String,
            required: true,
        },
        courseImage: {
            type: String,
        },
        courseDescription: {
            type: String,
            required: true,
        },
        tournaments: [{type: Schema.Types.ObjectId, ref: "Tournament"}],    
    });

const Course = model ('Course', courseSchema);
module.exports = Course;
