// const userEmail = "samiran@loyalhoney.com"
const userEmail = ""

// if (userEmail) {
//   console.log("got user email")
// } else {
//   console.log("don't have user email")
// }

// false value
{/*
false,0,-0,BigInt->0n,"",null, undefined,NaN
*/}
// truthy value
{/*
"0", 'false', " ", [], {}, function(){}
*/}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("Empty Object")
}

//  Nullish Coalescing Operators (??) : null , undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10


// console.log(val1)

// ternary operator

// condition ?? true: false;

