const fs = require('fs');

const files = fs.readdirSync('./public/images');
console.log('files', files);
fs.writeFileSync('./src/utils/imagesList.json', JSON.stringify(files));
