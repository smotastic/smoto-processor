const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');

const drive = google.drive('v3');

async function runSample(fileName) {
    // Obtain user credentials to use for the request
    const auth = await authenticate({
        keyfilePath: path.join(__dirname, './oauth2.keys.json'),
        scopes: 'https://www.googleapis.com/auth/drive.file',
    });
    google.options({ auth });
    console.log("start");
    // https://developers.google.com/drive/api/v3/folder#node.js_1

    var fileMetadata = {
        'name': 'Invoices',
        'mimeType': 'application/vnd.google-apps.folder'
    };
    drive.files.create({
        resource: fileMetadata,
        fields: 'id'
    }, function (err, file) {
        if (err) {
            // Handle error
            console.error(err);
        } else {
            console.log('Folder Id: ', file.data.id);
        }
    });



    // const fileSize = fs.statSync(fileName).size;
    // const res = await drive.files.create(
    //     {
    //         requestBody: {
    //             name: 'Ordner/Test.js',
    //         },
    //         media: {
    //             body: fs.createReadStream(fileName),
    //         },
    //     },
    //     {
    //         // Use the `onUploadProgress` event from Axios to track the
    //         // number of bytes uploaded to this point.
    //         onUploadProgress: evt => {
    //             const progress = (evt.bytesRead / fileSize) * 100;
    //             readline.clearLine();
    //             readline.cursorTo(0);
    //             console.log("progress")
    //             process.stdout.write(`${Math.round(progress)}% complete`);
    //         },
    //     }
    // );
    // console.log(res.data);
    // return res.data;
}

runSample("bla.js").catch(console.error);
module.exports = runSample;