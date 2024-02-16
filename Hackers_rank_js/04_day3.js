// Day 3: Sort Array of Objects

// Objective
// Practice sorting an array.

// Resources
// Here are some quick tutorials on sort:
// JavaScript Array sort()
// Sorting an Array of Objects by Property

// Task
// An array of objects,library, is provided for you in the editor. Complete the code below so that it sorts library's elements alphabetically by book name and then prints the sorted  library object.

// Note: There is no input to be read, and there are no sample test cases.



function sortLibrary() {
  // var library is defined, use it in your code
  // use console.log(library) to output the sorted library data
  // let sorted = library.sort((a, b) => {
  //   a.title.localeCompare(b.title)
  //   // console.log(a.title)
  //   // console.log(b.title)
  //   // a.title.localCompare(b.title)
  // })
  // console.log(sorted)
  // library.sort((firstBook, secondBook) => {
  //   return firstBook.title.localeCompare(secondBook.title);
  // });

  // // Print the sorted library object
  // console.log(library);
  function compare(x, y) {
    if (x.title > y.title) {
      return 1;
    }
    if (x.title < y.title) {
      return -1;
    }
    return 0;
  }


  console.log(library.sort(compare));
}

// tail starts here
var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    libraryID: 1254
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    libraryID: 4264
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245
  }
];

sortLibrary(library);