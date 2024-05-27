var fs = require('fs');


//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
const data=fs.readFileSync('./mynewfile1.txt','utf-8');
console.log(data);