const mongoose = require('mongoose');

const URI = 'mongodb+srv://miguel:topimpab11@cluster0.egiq0.mongodb.net/mern-tasks?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;