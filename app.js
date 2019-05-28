var fs = require('fs');

fs.readFile('./challenge1/info.txt', 'utf8', (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
} );

// let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
// names = names + 'Brad\n' +'Gramma\n' + 'Burt Reynolds\n' + 'The Artist Formerly Known as Prince'
// fs.writeFileSync('./challenge2/info.txt', names)
// console.log(fs.readFileSync('./challenge2/info.txt', 'utf-8'))

// fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt')

// fs.mkdirSync('./challenge4/copyfolder')

// fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt')

// let spaces = fs.readFileSync('./challenge5/info.txt', 'utf-8')
// arr = spaces.split('-')
// newString = arr.join(' ')
// fs.writeFileSync('./challenge5/info.txt', newString)
// console.log(fs.readFileSync('./challenge5/info.txt', 'utf-8'))

var files = fs.readdirSync('./challenge6')
console.log(files)
for (var i = 0; i < files.length; i++) {

  if (files[i].includes('.txt')) {
console.log(fs.readFileSync('./challenge6/' + files[i], 'utf8'))
  }

}
