const sharp = require('sharp');
const colors = require('colors/safe');

const resize = (imgPath, width, height) => {
    let [fileName, fileType] = imgPath.split('.');
    console.log(`Starting Resize \t ${colors.cyan(imgPath)} to ${colors.cyan(width)}x${colors.cyan(height)}`);

    let newPath = `${fileName}_${width}_${height}.jpg`;

    console.log(`New FileName \t\t ${colors.cyan(fileName)}${colors.green(`_${width}_${height}`)}.${colors.cyan(fileType)}`);

    sharp(imgPath)
        .resize(width, height)
        .jpeg()
        .toFile(newPath, function (err) {
            console.error(err);
        });
    console.log(`Finished Resize ${imgPath}`);

    return newPath;
}

module.exports = resize;