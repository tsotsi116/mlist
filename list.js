const fs = require("fs")
const path = require("path")
 
const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)
 
  arrayOfFiles = arrayOfFiles || []
 
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })
 
  return arrayOfFiles
}

let myfiles = getAllFiles(path.join(require('os').homedir() + '\\Videos'));
// myfiles.forEach(e => console.log(e));



let fileName = 'list-' + Date.now() + '.txt';
console.log(fileName)
myfiles.forEach(e => {
  fs.appendFile(fileName, e + '\n', err => {
    if(err){
      throw err;
    }
  });
})
