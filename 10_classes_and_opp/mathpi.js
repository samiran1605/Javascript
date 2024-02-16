const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

console.log(Math.PI)
Math.PI = 5
console.log(Math.PI)

const chai = {
  name: 'masala chai',
  price: 222,
  isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'price'))

Object.defineProperty(chai, 'price', {
  writable: false,
  enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'price'))

for (let [key, value] of chai) {
  console.log(`${key}: ${value}`)
}
// for (let [key, value] of Object.entries(chai)) {
//   console.log(`${key}: ${value}`)
// }