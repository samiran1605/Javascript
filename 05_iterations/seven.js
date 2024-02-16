const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newnum = nums.map(item => item + 10)

// let newnum = nums.map(item => item * 10).map(num => num + 5).filter(item => item > 50)

// console.log(newnum)

const shopingCart = [
  {
    itemName: "js course",
    price: 99
  },
  {
    itemName: "python course",
    price: 199
  },
  {
    itemName: "react course",
    price: 149
  },
  {
    itemName: "angular course",
    price: 129
  }
]

// const total_price = shopingCart.filter(items => items.price > 0).map(item => item.price).reduce((acc, curval) => acc + curval, 0)

const total_price = shopingCart.reduce((acc, curr) => acc + curr.price, 0)

console.log(total_price)

// const arrayOfObjects = [
//   { id: 1, name: 'John', age: 30 },
//   { id: 2, name: 'Alice', age: 25 },
//   { id: 3, name: 'Bob', age: 35 },
//   { id: 4, name: 'Emma', age: 28 }
// ];

// Filter objects where age is greater than or equal to 30