//  Immediately invoked function expression (IIFE)
// (function iife() {
//   console.log('iife')
// })()


function logSetElements(value1, value2) {
  console.log(`${value1} => ${value2}`);
}

const newSet = new Set(["foo", "bar"]).forEach(logSetElements)
console.log(newSet)



