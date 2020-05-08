const path = require('path');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
const colors = require('colors/safe');

const auth = async () => {
    // Obtain user credentials to use for the request
    console.log(`${colors.red.bold('Waiting for authorization...')}`)
    const auth = await authenticate({
        keyfilePath: path.join(__dirname, './oauth2.keys.json'),
        scopes: 'https://www.googleapis.com/auth/drive.file',
    });
    console.log(`${colors.red.bold('... Authorization complete')}`)
    google.options({ auth });
}

module.exports = auth;