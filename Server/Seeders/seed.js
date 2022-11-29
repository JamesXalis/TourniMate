const db = require('../Config/connection')
const { User, Course, Tournament } = require('../models');
const courseSeeds = require('./courseSeeds.json');
const tournamentSeeds = require('./courseSeeds.json');
const userSeeds = require('./courseSeeds.json');


db.once('open', async () => {
    try {
        await Course.deleteMany({});
        await Tournament.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);
        await Course.create(courseSeeds);
        await Tournament.create(tournamentSeeds);

        for (let i = 0; i < tournamentSeeds.length; i++) {
            const { _id, tournamentName} = await tournament.create(tournamentSeeds[i]);
            const course = await Course.findOneAndUpdate(
                { name: tournamentName},
                {
                    $addToSet: {
                        course: tournaments,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});