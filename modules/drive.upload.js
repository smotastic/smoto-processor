const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const colors = require('colors/safe');

const drive = google.drive('v3');

// upload("_DSC1514.JPG", "C:\\Users\\Allquanto\\Desktop\\testpics\\target\\2020_05_06\\800x600", "2020_05_06");

const uploadToDrive = async (imageName, sourceFolder, targetFolder) => {
    console.log(`${colors.green('Uploading...')} \t ${colors.cyan(imageName)} to ${colors.cyan(targetFolder)}`)
    let folderId = await findFolder(targetFolder);
    // folder does not exist, create it first
    if (!folderId) {
        console.log(`Folder does not exist ${colors.cyan(targetFolder)}. Proceeding to create...`)
        folderId = await createFolder(process.env.UPLOAD_TARGET_FOLDER_ID || 'root', targetFolder);
        console.log(`Folder was created: ${colors.cyan(folderId)}`);
    } else {
        console.log(`Found folder: ${colors.cyan(folderId)}`);
    }

    let fileId = await uploadFile(folderId, imageName, sourceFolder);
    console.log(`Upload of ${colors.cyan(imageName)} complete: ${colors.cyan(fileId)}`)
}

const findFolder = (folderName) => {
    return new Promise((resolve, reject) => {
        drive.files.list({
            q: `mimeType = 'application/vnd.google-apps.folder' and name ='${folderName}' and trashed = false`,
        }, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            let folder = res.data.files[0];
            // folder exists
            if (folder) {
                resolve(folder.id);
            }
            // folder does not exist
            else {
                resolve(undefined);
            }
        });

    });
}

const createFolder = (parent, folderName) => {

    var fileMetadata = {
        'name': folderName,
        'mimeType': 'application/vnd.google-apps.folder',
        parents: [parent],
    };
    return new Promise((resolve, reject) => {
        drive.files.create({
            resource: fileMetadata,
            fields: 'id'
        }, function (err, file) {
            if (err) {
                reject(err);
            } else {
                resolve(file.data.id);
            }
        });
    })

}

const uploadFile = (folderId, imageName, sourceFolder) => {
    var fileMetadata = {
        'name': imageName,
        parents: [folderId]
    };
    var media = {
        mimeType: 'image/jpeg',
        body: fs.createReadStream(path.resolve(sourceFolder, imageName))
    };
    return new Promise((resolve, reject) => {
        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
        }, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res.data.id);
            }
        });
    })

}

module.exports = uploadToDrive;