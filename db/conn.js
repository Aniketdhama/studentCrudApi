var mongoose=require("mongoose");


const DB="mongodb+srv://aniketdhama951:Basketball@cluster0.7v9wwkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));
 