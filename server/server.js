// ! npm imports
const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');
// ! npm imports

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

// ! Passprot Confogurations
passportConfig.passportConfig(app);
// ! Passprot Confogurations

// ! Backend Test Route
app.get('/', (req, res) => {

    res.status(200).send({
        message: 'Success',
        status: 200,
        dataObject: {
            appName: 'Pack Ur Bags',
            routeName: 'Server Test Route',
            workingStatus: 'Working as expected'
        }
    });
});
// ! Backend Test Route

// ! Routes Definiton



// ! Routes Definiton