const mongoose = require('mongoose');
require('dotenv').config();

//const mongooseURL = process.env.MONGODB_URL_LOCAL;
const mongooseURL = process.env.DBURL;

const db = async()=>{
    try{
         await mongoose.connect(mongooseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB Connected..")
    }
    catch(e){
        console.log(e);
        process.exit(1)
    }
}

db(mongoose.connection);

module.exports = db;