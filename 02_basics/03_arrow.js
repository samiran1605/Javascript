const user = {
  username: "samiran",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`)
    console.log(this)
  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function code() {
//   console.log(this)
// }

// const code = function () {
//   let name = "sam"
//   console.log(this.name)
// }


const code = () => {
  let name = "sam"
  console.log(this.name)

}
// code()

// const addTwoNumbers = (num1, num2) => {
//   return num1 + num2
// }

// const addTwoNumbers = (num1, num2) => num1 + num2

const addTwoNumbers = (num1, num2) => ({ user: "samiran" }) //without () it can be interpreted as a block of code instead of an object literal.

// console.log(addTwoNumbers(3, 4))

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 }
// ];

// function logUserInfo(user) {
//   console.log(`${this.prefix} ${user.name} is ${user.age} years old.`);
// }

// users.forEach(logUserInfo, { prefix: "User:" });

// const map1 = new Map([
//   ["foo", 3],
//   ["bar", {}],
//   ["baz", undefined],
// ])

// console.log(map1)
