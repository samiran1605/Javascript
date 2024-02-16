//  singleton 

// Object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "samiran",
  "full name": "Samiran Biswas",
  [mySym]: "mykey1",
  age: 25,
  location: "Kolkata",
  email: "samiran@dailyorganiccare.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// JsUser.email = "samiran@foresthoney.com"
// Object.freeze(JsUser)
// JsUser.email = "samiran@google.com"

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(JsUser)

JsUser.greeting = function () {
  console.log("Hello JS user");
}

JsUser.greetingtwo = function () {
  console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());