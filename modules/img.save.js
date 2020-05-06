const fs = require('fs');
const path = require('path');
const colors = require('colors/safe');
const getReadableDate = require('./misc.readableDate');

const save = (imageBuffer, targetFolder, imageName, birthtime) => {

    let [fileName] = imageName.split('.');
    let newFileName = `${fileName}_800x600.jpg`;
    let pathForFolder = path.resolve(targetFolder, getReadableDate(birthtime));
    let pathForImage = path.resolve(pathForFolder, newFileName);

    fs.mkdirSync(pathForFolder, { recursive: true });
    fs.writeFileSync(pathForImage, imageBuffer, { encoding: null });

    console.log(`${colors.green('Save')} ${colors.cyan(pathForImage)}\n`);
}

module.exports = save;