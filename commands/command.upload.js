const collect = require('../modules/img.collect');
const resize = require('../modules/img.resize');
const getBirthtime = require('../modules/img.birthtime');
const save = require('../modules/img.save');

const colors = require('colors/safe');

const upload = async (source, target) => {
    console.log(`Start Uploading from ${colors.cyan(source)}, and saving to ${colors.cyan(target)}`);

    // collect all images in folder
    const images = collect(source);

    // manipulate all images in folder
    console.log(colors.yellow.bold('Start Manipulating Images'));
    await asyncForEach(images, async imageName => {
        const imgFullPath = source + "\\" + imageName;
        console.log(`Starting Processing Image: ${colors.cyan(imgFullPath)}`)

        const birthtime = getBirthtime(imgFullPath);
        const resizedImageBuffer = await resize(imgFullPath, 800, 600);
        save(resizedImageBuffer, target, imageName, birthtime);
    });
    console.log(colors.yellow.bold('Finished Manipulating Images\n'));

    // console.log(colors.yellow.bold('Start Uploading Resized Images'));
    // TODO save them to drive
    // console.log(colors.yellow.bold('Finished Uploading Resized Images\n'));

}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index]);
    }
}

module.exports = upload;