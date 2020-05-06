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
    await asyncForEach(images, async image => {
        const imgPath = source + "\\" + image;
        console.log(`Starting Processing Image: ${colors.cyan(imgPath)}`)

        const birthtime = getBirthtime(imgPath);
        const resizedImageBuffer = await resize(imgPath, 800, 600);
        save(resizedImageBuffer, target, image, birthtime);
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