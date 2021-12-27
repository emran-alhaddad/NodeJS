const fs = require('fs');

const readStream = fs.createReadStream('./filesDir/bigData.txt' , { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./filesDir/bigCopyData.txt');
// console.log(Date());
// readStream.on('data' , (chunk) => 
// {
// // console.log('\n------------- New Chunk -------------');
// // console.log(chunk);
// writeStream.write('\n\n------------- '+Date()+' -------------\n\n');
// writeStream.write(chunk);
// });

// read and write directly using pip
console.log(Date());
readStream.pipe(writeStream );
