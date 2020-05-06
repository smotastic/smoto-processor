const collect = require('../modules/img.collect');
const resize = require('../modules/img.resize');

const colors = require('colors/safe');

const upload = (folder) => {
    // collect all images in folder
    console.log(colors.yellow.bold('Start Collecting Images'));
    const images = collect(folder);
    console.log(`Found Images: ${colors.red.bold(images)}`)
    console.log(colors.yellow.bold('Finished Collecting Images\n'));

    // resize all images in folder
    console.log(colors.yellow.bold('Start Resizing Images'));
    for (image of images) {
        resize(folder + "\\" + image, 800, 600);
        console.log(colors.cyan('-----------\n'))
    }
    console.log(colors.yellow.bold('Finished Resizing Images\n'));

    console.log(colors.yellow.bold('Start Uploading Resized Images'));

    console.log(colors.yellow.bold('Finished Uploading Resized Images\n'));

    // TODO save them to drive
}

module.exports = upload;