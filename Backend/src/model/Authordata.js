const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.o3el6.mongodb.net/LIBRARYANGULAR?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    aname : String,
    nationality : String,
    fambook : String,
    img : String
});

var Authordata = mongoose.model('authordata', AuthorSchema);

module.exports =  Authordata;