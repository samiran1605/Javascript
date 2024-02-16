// Day 3: Find the Second Largest Number in an Array
function processData(myArray) {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > largest) {
      secondLargest = largest;
      largest = myArray[i];
    } else if (myArray[i] < largest && myArray[i] > secondLargest) {
      secondLargest = myArray[i]
    }
  }
  console.log(secondLargest);
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input.split('\n')[1].split(' ').map(Number));
});
