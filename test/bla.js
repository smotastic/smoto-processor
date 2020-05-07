const { google } = require('googleapis');
const compute = google.compute('v1');

const oauth2Client = new google.auth.OAuth2(
    "CLIENT_ID",
    "CLIENT_SECRED",
    "PROJ_ID"
);

// {
//     "web" : {
//       "redirect_uris": ["http://localhost:3000/oauth2callback"],
//       "client_id": "x",
//       "client_secret": "x",
//       "project_id": "x"
//     }
//   }

// https://github.com/googleapis/google-api-nodejs-client/blob/master/samples/oauth2.js
google.options({
    auth: oauth2Client
});

const drive = google.drive({
    version: 'v3',
});

const res = drive.files.create({
    requestBody: {
        name: 'test.txt',
        mimeType: 'text/plain'
    },
    media: {
        mimeType: 'text/plain',
        body: 'Hello World'
    }
}).then(file => console.log(file)).catch(err => console.log(err));