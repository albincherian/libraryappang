const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.o3el6.mongodb.net/LIBRARYANGULAR?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    btitle : String,
    author : String,
    genre : String,
    img : String
});

var Bookdata = mongoose.model('bookdata', BookSchema);

module.exports =  Bookdata;