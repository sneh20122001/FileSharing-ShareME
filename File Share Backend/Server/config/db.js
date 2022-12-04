require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    
    mongoose.connect(
        process.env.MONGO_CONNECTION_URL, 
        { 
            useNewUrlParser : true,
        
            useUnifiedTopology: true
    }).then(()=>{
        console.log('Connected To Mongoose');
    }).catch((err)=>{
        console.log(err+'Something Went Wrong');
    })  
}


module.exports = connectDB;