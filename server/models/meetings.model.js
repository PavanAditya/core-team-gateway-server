const { mongoose } = require('../db/mongoose.config');

const meetingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    meetingDate: {
        type: String,
        default: null
    },
    meetingLink: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
        default: ''
    }
});

const mongooseMeetingSchema = new mongoose.model('core-team-meetings', meetingSchema);

module.exports = {
    meetingSchema: mongooseMeetingSchema
};