const fs = require('fs');

// Läsa filer

// fs.readFile('./mapp/text.txt', 'utf-8',(err, data) => {
//   if(err) {
//     console.log(err)
//   }

//   // console.log(data.toString())
//   console.log(data);
// })

// Skriva filer
// fs.writeFile('./mapp/text.txt', 'Ny text.', () => {
//   console.log('ändrade på texten');
// })

// Lägga till i en fil
// fs.appendFile('./mapp/text.txt', '\nDet här är text som vil har lagt till.', () => {
//   console.log('la till text');
// })

// const filename = 'test'

// fs.writeFile(`./mapp/${filename}.txt`, 'En ny fil', () => {
//   console.log('ändrade på texten');
// })


// Döpa om en fil
// fs.rename('./mapp/text3.txt', './mapp/text2.txt', (err) => {
//   if(err) {
//     console.log(err)
//   }
//   else
//   console.log('bytte namn på filen')
// })


// Mappar

// if(!fs.existsSync('./NyMapp')) {
  
//   fs.mkdir('./NyMapp', err => {
//     if(err) {
//       console.log(err)
//     }
//     else
//     console.log('mapp skapad')
//   })
// } else {
//   // tar bort en mapp
//   fs.rmdir('./NyMapp', (err) => {
//     if(err)
//       console.log(err)
//     else
//       console.log('tar bort mappen')
//   })
// }


// Ta bort filer
// if(fs.existsSync('./mapp/text2.txt')) {
//   fs.unlink('./mapp/text2.txt', err => {
//     if(err)
//       console.log(err)
//     else 
//       console.log('tar bort filen')
//   })
// }


const path = require('path');

// console.log(path.join(__dirname, 'mapp', 'text.txt'))

fs.appendFile(path.join(__dirname, 'mapp', 'text.txt'), '\nNu lägger vi till text igen.', (err) => {
  if(err)
    console.log(err)
})