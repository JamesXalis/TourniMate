const { Schema } = require('mongoose');

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
        par: {
            type: String,
            required: true
        },
        tournaments: [Tournament]
    });

module.exports = courseSchema;
