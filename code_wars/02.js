// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr) {

  let flag = true;
  return arr.map(item => {
    switch (item) {
      case 'flick':
        flag = !flag
        return flag;
      default:
        return flag;
    }
  })
  // let flag = true;
  // return arr.map(element => {
  //   if (element === 'flick') {
  //     flag = !flag;
  //     return flag;
  //   } else {
  //     return flag;
  //   }
  // });


}

// let flick = ['codewars', 'flick', 'code', 'wars']
let flick = ["flick", "chocolate", "adventure", "sunshine"]
// let flick = ["flick", "flick", "flick", "flick", "flick"]


console.log(flickSwitch(flick))