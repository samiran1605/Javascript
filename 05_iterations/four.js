// Objects

const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift apple"
}

for (const key in myObj) {
  console.log(key)
}

// for-in loops will not work on maps as Maps are Iterable