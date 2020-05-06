const fs = require('fs');

// collect images of a given folder, and return a list of paths
const collect = (folder) => {
    let content = fs.readdirSync(folder)
    let images = content.filter(file => file.match('.*\.(jpg|JPG|png|PNG)'));
    return images;
}

module.exports = collect;