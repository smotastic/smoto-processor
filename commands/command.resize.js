const collect = require('../modules/img.collect');
const resize = require('../modules/img.resize');

const resizeUpload = (folder) => {
    // collect all images in folder
    const images = collect(folder);

    // resize all images in folder
    for (image of images) {
        resize(folder + "\\"+ image, 800, 600);  
    }

    // TODO save them to drive
}

module.exports = resizeUpload;