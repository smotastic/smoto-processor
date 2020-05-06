const sharp = require('sharp');

const resize = (imgPath, width, height) => {
    let [fileName, fileType] = imgPath.split('.');
    console.log(`Starting to Resize ${imgPath} to ${width}x${height}`);

    let newPath = `${fileName}_${width}_${height}.${fileType}`;

    sharp(imgPath)
        .resize(width, height)
        .toFile(newPath, function (err) {
            console.err(err);
        });
    console.log(`----------- Finished Resizing ${imgPath}\n`);
    return newPath;
}

module.exports = resize;