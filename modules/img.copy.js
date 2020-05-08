const sharp = require('sharp');
const colors = require('colors/safe');

const copy = (imgPath) => {
    return new Promise((resolve, reject) => {
        sharp(imgPath)
            .toBuffer().then(buffer => {
                console.log(`${colors.green('Copied')}`);
                resolve(buffer);
            }).catch(error => reject(error));
    });
}

module.exports = copy;