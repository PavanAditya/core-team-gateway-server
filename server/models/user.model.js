const { mongoose } = require('../db/mongoose.config');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    aboNum: {
        type: String,
        default: null
    },
    admin: {
        type: Boolean,
        default: false
    },
    addedBy: {
        type: String,
        default: ''
    }
});

const mongooseUserSchema = new mongoose.model('core-team-members', userSchema);

module.exports = {
    userSchema: mongooseUserSchema
};