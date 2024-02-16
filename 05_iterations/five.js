const coding = ["js", "py", "ruby", "java", "cpp"]

// coding.forEach(function nam(item) {
//   console.log(item)
// });

// coding.forEach((element) => {
//   console.log(element)
// });
const mycoding = [
  {
    languagename: "javascript",
    filename: "js"
  },
  {
    languagename: "python",
    filename: "py"
  },
  {
    languagename: "cpp",
    filename: "C++"
  }
]

mycoding.forEach(element => {
  console.log(element.filename)
})
