const mongoose =  require('mongoose');
const userSchema = mongoose.Schema({

    fullName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required:true,
        default:"User"
    },
},
{timestramps:true})
const User = mongoose.model('user',userSchema);
module.exports = User;