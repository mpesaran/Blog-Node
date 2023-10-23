const fs = require('fs');
const writeStream = fs.createWriteStream('./docs/bolg4.txt');

//read file
// const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'}); //pass second argument which is an option object to encoding as it comes in
// readStream.on('data' , (chunk) => {  //on is an eventlistener
//     console.log('-----NEW CHUNK-----');
//     console.log(chunk);
// });

//write stream
 const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'}); //pass second argument which is an option object to encoding as it comes in
// readStream.on('data' , (chunk) => {  
    
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// });


 //piping
readStream.pipe(writeStream);

