// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {
  return num1 + num2
}

// const result = addTwoNumbers(3, 9)
// console.log(`The sum is ${result}.`)

function loginUserMessage(username) {
  return `${username} just logged in`
}

// console.log(loginUserMessage("samiran"))

// (...num) is a rest operator. 
function calculateCartPrice(vall, val2, ...num) {
  return num
}

// console.log(calculateCartPrice(100, 200, 300, 500, 700))

const user = {
  username: "samiran",
  price: 99
}

function handleObject(anyobject) {
  console.log(`Usernam is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

const newArray = [20, 400, 10, 343, 237, 499]

function returnSecondValue() {
  return newArray[1]
}

console.log(returnSecondValue(newArray))