// Displaying Information contained in Objects

// Stack Overflow has a nice, well summarized tutorial related to displaying information contained in objects.

// Task

// Write a JavaScript program to display the status (i.e. display book name, author name and reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties. Your task is to display the following:

// If the book is unread:

// You still need to read '<book_name>' by <author_name>.
// If the book is read:

// Already read '<book_name>' by <author_name>.

function displayInformation(data) {
  // var library is defined, use it to print the information
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i].readingStatus === false) {
  //     console.log(`You still need to read '${data[i].title}' by '${data[i].author}'`)
  //   } else if (data[i].readingStatus === true) {
  //     console.log(`Already read '${data[i].title}' by '${data[i].author}'.`)
  //   }
  // }
  // data.map((book) => {
  //   if (!book.readingStatus) {
  //     console.log(`You still need to read '${book.title}' by ${book.author}.`)
  //   } else {
  //     console.log(`Already read '${book.title}' by ${book.author}.`)
  //   }
  // })
  // data.forEach((book) => {
  //   message = book.readingStatus
  //     ? `Already read '${book.title}' by ${book.author}.`
  //     : `You still need to read '${book.title}' by ${book.author}.`;
  //   console.log(message);
  // });
  data.map((read) => {
    read.readingStatus
      ? console.log(`Already read '${read.title}' by ${read.author}.`)
      : console.log(`You still need to read '${read.title}' by ${read.author}.`)
  })
}

// tail starts here
var library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
  }
];

displayInformation(library);