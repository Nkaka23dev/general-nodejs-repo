const fs = require("fs");

const dataStream = fs.createReadStream('./docs/blog3.txt', {encoding: "utf8"});
const writeStream = fs.createWriteStream('./docs/blog4.txt');
// dataStream.on('data', (chunk) => {
//     console.log("++++++++++++++++++++++++++++++++++++++++++++++++++")
//     console.log("NEW BATCH ARRIVE NEW BATCH ARRIVE NEW BATCH ARRIVE")
//     console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++")
//     console.log(chunk)
//     writeStream.write('\nNEW LINE\n')
//     writeStream.write(chunk)
// })

dataStream.pipe(writeStream);
