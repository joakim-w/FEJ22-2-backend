const url = require('url');

const myUrl = new URL('https://minhemsida.com:5000/about.html?id=22kjb34kjh2&loggedIn=true');

// console.log(myUrl.href)
// console.log(myUrl.hostname)

console.log(myUrl.searchParams);
myUrl.searchParams.append('key', 'value')

myUrl.searchParams.forEach((value, key) => {
  console.log(`${key}: ${value}`)
})