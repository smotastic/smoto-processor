const sharp = require('sharp');
const colors = require('colors/safe');

const resize = (imgPath, width, height) => {
    return new Promise((resolve, reject) => {
        sharp(imgPath)
            .resize(width, height)
            .jpeg()
            .toBuffer().then(buffer => {
                console.log(`${colors.green('Resized')} to ${colors.cyan(width + "x" + height)}`);
                resolve(buffer);
            });
    });
}

module.exports = resize;