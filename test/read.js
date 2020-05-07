const walk = require('./misc.walkDir');

walk("C:\\Users\\nismolin\\Desktop\\1", (err, results) => {
    console.log(results);
})