const { Schema, model } = require('mongoose');

// Schema to create course model
const courseSchema = new Schema(
    {
        name: String,
        description: String,
        location: String,
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `fullName` that gets and sets the courses name
courseSchema
    .virtual('courseName')
    // Getter
    .get(function () {
        return `${this.name}`;
    })
    // Setter to set the first and last name
    .set(function (v) {
        const name = v.split(' ')[0];
        this.set({ first });
    });

// Initialize our User model
const Course = model('course', courseSchema);

module.exports = Course;
