const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/user_register",{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`connection to mongodb is successful!`);
}).catch((e)=>{
    console.log(`could not connect to mongodb ${e}`);
})