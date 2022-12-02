const db = require('../Config/connection')
const { User, Course, Tournament } = require('../Models/Index');
const courseSeeds = require('./courseSeeds.json');
const tournamentSeeds = require('./tournamentSeeds.json');
const userSeeds = require('./userSeeds.json');


db.once('open', async () => {
    try {
        await Course.deleteMany({});
        await Tournament.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);
        await Tournament.create(tournamentSeeds);
        await Course.create(courseSeeds);

        for (let i = 0; i < tournamentSeeds.length; i++) {
            const { _id, course} = await Tournament.create(tournamentSeeds[i]);
            await Course.findOneAndUpdate(
                { courseName: course},
                {
                    $addToSet: {
                        tournaments: _id,
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

