const fs = require('fs');
const colors = require('colors/safe');

// collect images of a given folder, and return a list of paths
const collect = (folder) => {

    let content = fs.readdirSync(folder)
    let images = content.filter(file => file.match('.*\.(jpg|JPG|png|PNG)'));

    console.log(`${colors.yellow.bold('Collecting Images:\n')}${colors.red(images)}\n`);

    return images;
}

module.exports = collect;