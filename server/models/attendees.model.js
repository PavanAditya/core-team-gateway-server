const { mongoose } = require('../db/mongoose.config');

const attendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    refferedAboNum: {
        type: String,
        default: null
    },
    attendedMeetingId: {
        type: String,
        default: null
    },
    createdDateTime: {
        type: Date,
        default: Date.now
    }
});

const mongooseAttendeeSchema = new mongoose.model('core-team-attendees', attendeeSchema);

module.exports = {
    attendeeSchema: mongooseAttendeeSchema
};