// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async operation..
//   // DB call, cryptography, network call

//   setTimeout(function () {
//     console.log("Async Task complete")
//     resolve()
//   }, 2000)
// })

// promiseOne.then(function () {
//   console.log("promise consumed")
// })

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2")
//     resolve()
//   }, 1000)
// }).then(function () {
//   console.log("Async Task 2 resolved")
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "sam", email: "samiran@loyalhoney.com" })
//   }, 1000)
// })

// promiseThree.then(function (user) {
//   console.log(user)
// })

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "samiran", password: "12345" })
//     } else {
//       reject("ERROR: Could not authenticate user.")
//     }
//   }, 1000)
// })

// promiseFour.then((user) => {
//   console.log(user)
//   return user.username
// }).then((username) => console.log(username)).catch((err) => console.log("Couldn't login")).finally(() => {
//   console.log("first attempt to get username succeeded");
// })


// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Javascript", password: "12345" })
//     } else {
//       reject("ERROR: Js went Wrong.")
//     }
//   }, 1000)
// })

// let consumePromiseFive = async () => {
//   try {
//     let data = await promiseFive;
//     console.log(`Username is ${data.username}`);

//   } catch (e) {
//     console.log(e);
//   }
// }

// consumePromiseFive()


// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log("Error", error)
//   }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { return response.json() })
  .then((data) => { console.log(data) })
  .catch((error) => { console.log("Error", error) })