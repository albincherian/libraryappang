const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.o3el6.mongodb.net/LIBRARYANGULAR?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : String,
    email : String,
    pwd : String
});

var Userdata = mongoose.model('userdata', UserSchema);

module.exports =  Userdata;