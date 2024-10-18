require('dotenv').config();
var mongoose=require("mongoose");
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const DB=`mongodb+srv://${username}:${password}@cluster0.7v9wwkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
 