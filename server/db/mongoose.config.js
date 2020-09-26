const mongoose = require('mongoose');

const url = 'mongodb+srv://pavanaditya_ms:adish789@core-db.z18e3.gcp.mongodb.net/core-db?retryWrites=true&w=majority';
const urlParser = {
    useNewUrlParser: true
};
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(url, urlParser)
    .then(() => {
        console.log('Database connected Successfully');
    })
    .catch(err => {
        console.log('Database connection Failed', err);
        return err;
    });
module.exports = { mongoose };