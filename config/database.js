const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
        });
        console.log(`Mongodb connected`);
    } catch (err) {
        console.log(`Error:: ${err.message}`);
    }
};

dbConnect();

module.exports = dbConnect;