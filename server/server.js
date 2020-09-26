// ! npm imports
const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');
// ! npm imports

// ! Custom Imports
const { userSchema } = require('./models/user.model');
const { attendeeSchema } = require('./models/attendees.model');
const { meetingSchema } = require('./models/meetings.model');
// ! Custom Imports

// ! operating vars
const PORT = process.env.PORT || 4000;
const app = express();
const httpServer = app.listen(PORT, () => { });
// ! operating vars

// ! parsing input request bodies
app.use(bodyParser.json());
// ! parsing input request bodies

// ! CORS configuration
app.use(cors());
// ! CORS configuration

// ! Backend Test Route
app.get('/', (req, res) => {

    res.status(200).send({
        message: 'Success',
        status: 200,
        dataObject: {
            appName: 'Core Team Gateway',
            routeName: 'Server Test Route',
            workingStatus: 'Working as expected'
        }
    });
});
// ! Backend Test Route

// ! Routes Definiton

// ? Core Members APIs

// ! Get All Core Members
// ? ${BASE_URL}/api/v1/coremembers
app.get('/api/v1/coremembers', async (req, res, next) => {
    try {
        const allUsers = await userSchema.find({});
        if (!allUsers) {
            res.status(404).send({
                message: 'User Not Found.',
                status: 404,
                dataObject: {
                    appName: 'Core Team Gateway',
                    routeName: 'All User Details Route',
                    data: 'No Users found.'
                }
            });
            return;
        }
        res.status(200).send({
            message: 'Users Fetched Successfully',
            status: 200,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'All User Details Route',
                data: allUsers
            }
        });
    } catch (err) {
        res.status(500).send({
            message: 'Users Fetch Error.',
            status: 500,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'All User Details Route',
                data: {
                    errorMessage: 'Users fetch failed at DB level.',
                    error: `${err}`
                }
            }
        });
    }
});
// ! Get All Core Member

// ! Add A New Core Member
// ? ${BASE_URL}/api/v1/coremember/new
app.post('/api/v1/coremember/new', async (req, res, next) => {
    try {
        const coreMemberData = new userSchema(req.body);
        const newCoreMember = await coreMemberData.save();
        if (!newCoreMember) {
            res.status(500).send({
                message: 'Core Member Add Error.',
                status: 500,
                dataObject: {
                    appName: 'Core Team Gateway',
                    routeName: 'Add Core Member Route',
                    data: {
                        errorMessage: 'Core Member Add failed at DB level.',
                        error: 'Failed at Core Member schema level'
                    }
                }
            });
            return;
        }
        res.status(200).send({
            message: 'Core Member Add Error.',
            status: 200,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'Add Core Member Route',
                data: 'Core Member Added SuccessFully'
            }
        });
    } catch (err) {
        res.status(500).send({
            message: 'Core Member Add Error.',
            status: 500,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'Add Core Member Route',
                data: {
                    errorMessage: 'Users fetch failed at DB level.',
                    error: `${err}`
                }
            }
        });
    }
});
// ! Add A New Core Member

// ? Core Members APIs



// ? Meetings APIs

// ! Get All Meetings
// ? {BAE_URL}/api/v1/meetings
app.get('/api/v1/meetings', async (req, res, next) => {
    try {
        const allMeetings = await meetingSchema.find({});
        if (!allMeetings) {
            res.status(404).send({
                message: 'Meeting Not Found.',
                status: 404,
                dataObject: {
                    appName: 'Core Team Gateway',
                    routeName: 'All Meeting Details Route',
                    data: 'No Meetings found.'
                }
            });
            return;
        }
        res.status(200).send({
            message: 'Meetings Fetched Successfully',
            status: 200,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'All Meeting Details Route',
                data: allMeetings
            }
        });
    } catch (err) {
        res.status(500).send({
            message: 'Meetings Fetch Error.',
            status: 500,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'All Meeting Details Route',
                data: {
                    errorMessage: 'Meetings fetch failed at DB level.',
                    error: `${err}`
                }
            }
        });
    }
});
// ! Get All Meetings

// ! Add New Meeting
// ? ${BAE_URL}/api/v1/meeting/new
app.post('/api/v1/meeting/new', async (req, res, next) => {
    try {
        const meetingData = new meetingSchema(req.body);
        const newMeeting = await meetingData.save();
        if (!newMeeting) {
            res.status(500).send({
                message: 'Meeting Add Error.',
                status: 500,
                dataObject: {
                    appName: 'Core Team Gateway',
                    routeName: 'Add Meeting Route',
                    data: {
                        errorMessage: 'Meeting Add failed at DB level.',
                        error: 'Failed at Meeting schema level'
                    }
                }
            });
            return;
        }
        res.status(200).send({
            message: 'Meeting Add Error.',
            status: 200,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'Add Meeting Route',
                data: 'Meeting Added SuccessFully'
            }
        });
    } catch (err) {
        res.status(500).send({
            message: 'Meeting Add Error.',
            status: 500,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'Add Meeting Route',
                data: {
                    errorMessage: 'Users fetch failed at DB level.',
                    error: `${err}`
                }
            }
        });
    }
});
// ! Add New Meeting

// ? Meetings APIs



// ? Attendees APIs

// ! Get All Attendees
// ? ${BASE_URL}/api/v1/attendees
app.get('/api/v1/attendees', async (req, res, next) => {
    try {
        const allAttendees = await attendeeSchema.find({});
        if (!allAttendees) {
            res.status(404).send({
                message: 'Attendee Not Found.',
                status: 404,
                dataObject: {
                    appName: 'Core Team Gateway',
                    routeName: 'All Attendee Details Route',
                    data: 'No Attendees found.'
                }
            });
            return;
        }
        res.status(200).send({
            message: 'Attendees Fetched Successfully',
            status: 200,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'All Attendee Details Route',
                data: allAttendees
            }
        });
    } catch (err) {
        res.status(500).send({
            message: 'Attendees Fetch Error.',
            status: 500,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'All Attendee Details Route',
                data: {
                    errorMessage: 'Attendees fetch failed at DB level.',
                    error: `${err}`
                }
            }
        });
    }
});
// ! Get All Attendees

// ! Add New Attendee
// ? ${BAE_URL}/api/v1/attendee/new
app.post('/api/v1/attendee/new/:refferedId', async (req, res) => {

    try {
        const refferedUser = await userSchema.find({
            aboNum: req.params.refferedId
        });
        if (!refferedUser) {
            res.status(403).send({
                message: 'Attendee Add Error.',
                status: 403,
                dataObject: {
                    appName: 'Core Team Gateway',
                    routeName: 'Add Attendee Route',
                    data: {
                        errorMessage: 'Users fetch failed at DB level.',
                        error: 'Reffered ABO Number is Invalid (or) Unauthorized.'
                    }
                }
            });
        } else {
            const attendeeData = new attendeeSchema(req.body);
            const newAttendee = await attendeeData.save();
            if (!newAttendee) {
                res.status(500).send({
                    message: 'Attendee Add Error.',
                    status: 500,
                    dataObject: {
                        appName: 'Core Team Gateway',
                        routeName: 'Add Attendee Route',
                        data: {
                            errorMessage: 'Attendee Add failed at DB level.',
                            error: 'Failed at attendee schema level'
                        }
                    }
                });
                return;
            }
            res.status(200).send({
                message: 'Attendee Add Error.',
                status: 200,
                dataObject: {
                    appName: 'Core Team Gateway',
                    routeName: 'Add Attendee Route',
                    data: 'Attendee Added SuccessFully'
                }
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 'Attendee Add Error.',
            status: 500,
            dataObject: {
                appName: 'Core Team Gateway',
                routeName: 'Add Attendee Route',
                data: {
                    errorMessage: 'Users fetch failed at DB level.',
                    error: `${err}`
                }
            }
        });
    }
});
// ! Add New Attendee

// ? Attendees APIs



// ! Routes Definiton