// const tinderUser =  new Object{}
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
  email: "sam@google.com",
  fullname: {
    userfullname: {
      firstname: "samiran",
      lastname: "biswas"
    }
  }
}


// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "c", 6: "d" }
const obj4 = { 7: "c", 8: "d" }

const obj5 = Object.assign({}, obj1, obj2, obj3, obj4)
// console.log(obj5)

const obj6 = { ...obj1, ...obj2, ...obj3, ...obj4 }
// console.log(obj6)

const users = [
  { id: '0', name: 'John' },
  { id: '1', name: 'Jane' },
  { id: '2', name: 'sam' }
]

// console.log(users[1].name)


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))
console.log(obj1)