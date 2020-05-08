const fs = require('fs');
const path = require('path');
const colors = require('colors/safe');

const save = (imageBuffer, targetFolder, imageName, postfix) => {

    let [fileName] = imageName.split('.');
    let newFileName = `${fileName}${postfix}.jpg`;
   
    let pathForImage = path.resolve(targetFolder, newFileName);

    fs.mkdirSync(targetFolder, { recursive: true });
    fs.writeFileSync(pathForImage, imageBuffer, { encoding: null });

    console.log(`${colors.green('Save')} to \t ${colors.cyan(pathForImage)}\n`);
}

module.exports = save;