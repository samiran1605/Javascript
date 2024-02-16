const user = {
  username: "samiran",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("got user details from server")
    console.log(`Username: ${this.username}`)
    console.log(this)
  }

}


// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, password, isloggedIn) {
  this.username = username;
  this.password = password;
  this.isloggedIn = isloggedIn;

  this.greetings = function () {
    console.log(`WelcoName : ${this.username}`);
  }

  return this
}

const userOne = new User('samiran', 123, true)
const userTwo = new User('practice', 321, false)
console.log(userOne)

//1. new -  create new empty object {}.
// 2. constructor function is called because of "new" keyword. 