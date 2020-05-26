const path = require('path');

const collect = require('../modules/img.collect');
const resize = require('../modules/img.resize');
const copy = require('../modules/img.copy');
const getBirthtime = require('../modules/img.birthtime');
const getReadableDate = require('../modules/misc.readableDate');
const save = require('../modules/img.save');
const uploadToDrive = require('../modules/drive.upload.js')
const auth = require('../modules/drive.auth.js')

const colors = require('colors/safe');

const backup = async (source, target, upload) => {

    console.log(`${colors.yellow.bold('Begin Save and Upload.')} \n Source: ${source}\n Target: ${target}`)

    // auth for google drive
    if (upload) {
        await auth();
    }

    console.log(`Start Uploading from ${colors.cyan(source)}, and saving to ${colors.cyan(target)}`);

    // collect all images in folder
    const images = collect(source);

    // manipulate all images in folder
    console.log(colors.yellow.bold('Start Manipulating Images'));
    await asyncForEach(images, async imageName => {
        const imgFullPath = path.resolve(source, imageName);
        const birthtime = getReadableDate(getBirthtime(imgFullPath));
        let pathForImage = path.resolve(target, birthtime);
        console.log(`\nStarting Processing Image: ${colors.cyan(imgFullPath)}`)

        // compressed one
        const resizedImageBuffer = await resize(imgFullPath, 800, 600);
        let pathForResizedImage = path.resolve(pathForImage, '800x600');
        save(resizedImageBuffer, pathForResizedImage, imageName);

        // original one
        copy(imgFullPath, path.resolve(pathForImage, imageName));

        // upload compressed one
        if (upload) {
            await uploadToDrive(imageName, pathForResizedImage, birthtime);
        }


        console.log(`\nFinished Processing Image`)

    });
    console.log(colors.yellow.bold('Finished Manipulating Images\n'));
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index]);
    }
}

module.exports = backup;