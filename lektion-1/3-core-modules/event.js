const EventEmitter = require('events');

class Emitter extends EventEmitter {
  login(name) {
    this.emit('welcome', name)
  }
}


const myEmitter = new Emitter()

// myEmitter.on('blahablaha', () => console.log('Eventet kördes'))


// myEmitter.emit('blahablaha')
// myEmitter.emit('blahablaha')


myEmitter.on('welcome', name => console.log(`Hello ${name}, welcome to the chat!`))


myEmitter.login('Joakim');
myEmitter.login('Haithem');