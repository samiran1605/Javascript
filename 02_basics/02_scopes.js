let a = 10;
// const b = 20;
// var c = 30;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log(`Inner a : ${a}`)

}

// console.log(`Global a is ${a}`) //block scope
// console.log(b) //block scope
// console.log(`var global scope: value print ${c}`)   //global 


function one() {
  const username = "samiran"

  function two() {
    const website = "youtube"
    console.log(username)
  }
  // console.log(website)

  two()
}

one()