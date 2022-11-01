// const user = {
//   first: 'Joakim',
//   last: 'Wahlström',
//   age: 35,
//   email: 'joakim@mail.com'
// }

// console.log(user)

class User{
  constructor(first, last) {
    this.lastName = last;
    this.firstName = first;
  }

  greet() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}.`)
  }

}

module.exports = User;
// export default user;