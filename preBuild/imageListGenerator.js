const fs = require('fs');

const files = fs.readdirSync('./public/images');
console.log('files', files);
let res = {};
files.forEach(el => (res[el] = el));

fs.writeFileSync('./src/utils/imagesList.json', JSON.stringify(res));
