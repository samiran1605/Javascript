// let myName = "samiran        "  
// let myn = "sam     "  

// console.log(myName.length)


let myHeros = ["thor", "spiderman"]


let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`)
  }
}

Object.prototype.samiran = function () {
  console.log(`Samiran says hello`)
}

Array.prototype.sam = function () {
  console.log(`Sam from Array`)
}

// heroPower.samiran()
// myHeros.samiran()
// myHeros.sam()

// inheritance

const User = {
  name: 'honey',
  username: 'honey@example.com',
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherString = 'samiran biswas     '

String.prototype.trueLength = function () {
  console.log(`${this}`)
  console.log(`True length is: ${this.trim().length}`)
}

anotherString.trueLength()